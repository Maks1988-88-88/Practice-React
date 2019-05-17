import React from "react";
import PropTypes from "prop-types";
import Todo from "../Todo";

export default class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
  };
  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <div>
        {todos.map(t => (
          <Todo
            text={t.text}
            key={t.id}
            onClick={() => {
              onTodoClick(t.id);
            }}
          />
        ))}
      </div>
    );
  }
}
