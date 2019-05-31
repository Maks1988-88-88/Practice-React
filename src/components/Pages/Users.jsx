import React from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav";
import usersData from "../../fakeDataBase";

console.log(usersData);

const makeNavlinks = (usersData, path) =>
  usersData.map(u => ({
    path: `${path}/${u.id}`,
    text: u.name
  }));

const getUserById = (usersData, id) => usersData.find(u => u.id === id);
const Users = ({ match }) => {
  console.log(makeNavlinks(usersData, match.path));
  return (
    <div>
      <h2>Users Page</h2>
      <Nav items={makeNavlinks(usersData, match.path)} />
      <Route
        path="/user/:userID"
        render={props => {
          const userID = props.match.params.userID;
          const user = getUserById(usersData, userID);
          if (user) {
            return (
              <div>
                <h1>{user.name} </h1>
                <h2>age: {user.age} </h2>
                <h3>position: {user.position} </h3>
              </div>
            );
        }
        return <h1>user not found</h1>;
        }}
      />
    </div>
  );
};

export default Users;
