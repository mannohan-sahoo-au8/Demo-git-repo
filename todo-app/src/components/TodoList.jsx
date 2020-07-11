import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const updateTodo = (todoId) => {};

  return props.todos.map((todo) => (
    <TodoListItem
      onDelete={props.onDelete}
      // onUpdate={this.updateTodo}
      key={todo.id}
      todo={todo}
    />
  ));
};

export default TodoList;
