import React from "react";
import Header from "./Header";
import Post from "./Post";
import Logo from "./logo";
import post from "../post";
import Counter from "./counter";
import Toggler from "./toggler";
import LoginForm from "./LoginForm";
// import AddtodoForm from "./AddtodoForm";
import v4 from "uuid/v4";
// import TodoTodo from "./TodoTodo";


console.log(post);

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

// onDeleTodo = id => {
//   console.log(id);
//   this.setState({
//     todos: this.state.todos.filter(todo => todo.id !== id)
//   });
// }

  render() {
    // const { todos } = this.state;
    const listItems = {
      "001": { id: "001", text: "qwer" },
      "002": { id: "002", text: "qwer2" }
    };
    console.log(Object.keys(listItems).map(y => console.log(listItems[y])));

    const items = <Post {...post} />;
    const Seconditems = [1, 2, 3, 4, 5].map((x, idx) => <li key={idx}>{x}</li>);
    console.log(Seconditems);

    return (
      <div>
        <Counter
          ocCounterClick={() => {
            console.log("qweqwe");
          }}
        />
        <Toggler />
        <LoginForm />
        {/* <AddtodoForm onFormSubmit={this.onAddTodo} /> */}
        {/* <TodoTodo todos={todos} /> */}
        {/* <p>{JSON.stringify(this.state.todos)}</p> */}
        <Header text="Social book">
          <Logo />
        </Header>
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
