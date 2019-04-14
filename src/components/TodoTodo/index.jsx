import React from "react";
import PropTypes from "prop-types";
import delTo from "../delTo";

export default class TodoTodo extends React.Component {
  static PropTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };
  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <div>
        {todos.map(t => (
          <delTo
            key={t.id}
            text={t.text}
            ocClick={() => {
              onTodoClick(t.id);
            }}
          />
        ))}
      </div>
    );
  }
}
