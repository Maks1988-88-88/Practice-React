import React from "react";
import Header from "./Header/index";
import Post from "./Post/index";
import Logo from "./Logo";
import post from "../post";
import Counter from "./Counter";
import Toggler from "./Toggler/index";
import LoginForm from "./LoginForm";
import AddtodoForm from "./AddtodoForm";
import v4 from "uuid/v4";
import TodoList from "./TodoList";
import GalleryContainer from "./GalleryContainer/index";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Nav from "./Nav";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

console.log(post);

const navLinks = [
  {
    path: "/",
    text: "home"
  },
  {
    path: "/about",
    text: "about"
  },
  {
    path: "/user",
    text: "user"
  }
];

class App extends React.Component {
  state = {
    todos: []
  };

  onAddTodo = text => {
    const todo = {
      id: v4(),
      text: text
    };
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  onDeleteTodo = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todos } = this.state;
    const listItems = {
      "001": { id: "001", text: "qwer" },
      "002": { id: "002", text: "qwer2" }
    };
    // console.log(Object.keys(listItems).map(y => console.log(listItems[y])));

    const items = <Post {...post} />;
    const Seconditems = [1, 2, 3, 4, 5].map((x, idx) => <li key={idx}>{x}</li>);
    // console.log(Seconditems);

    return (
      <div>
        <div>
          <h1>App component Router</h1>
          <Nav items={navLinks} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={Users} />

            {/* <Route exact path="/" render={() => <h2>Home page</h2>} /> */}
            {/* <Route path="/about" render={() => <h2>About page</h2>} /> */}
            {/* <Route path="/user" render={() => <h2>User page</h2>} /> */}
            {/* <Route render={() => <h2>404 page not found</h2>} /> */}
            <Redirect to="/" />
          </Switch>
        </div>

        <GalleryContainer />
        <Header text="Social book">
          <Logo />
        </Header>
        <Counter
          onCounterClick={() => {
            console.log("click!");
          }}
        />
        <Toggler />
        <LoginForm />
        <AddtodoForm onFormSubmit={this.onAddTodo} />
        <TodoList todos={todos} onTodoClick={this.onDeleteTodo} />
        {/* <p>{JSON.stringify(this.state.todos)}</p> */}
        <Post
          user="Poly"
          date="05-12-2017"
          text="Mamxsa 213 mdsa  213m 12"
        />
        <Post user={post.user} date={post.date} text={post.text} />
        <Post {...post} />
        <ul>{items}</ul>
        <ul>{Seconditems}</ul>
        <ul>
          {Object.keys(listItems).map(key => (
            <li key={listItems[key].id}>{listItems[key].text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
