import React from "react";
import axios from "axios";
import TodoListItem from "./TodoListItem";

class TodoList extends React.Component {
  state = {
    todos: null,
  };
  async componentDidMount() {
    const { data } = await axios.get(
      `https://corsanywhere.herokuapp.com/https://jsonplaceholder.typicode.com/todos`
    );
    this.setState({ todos: data });
  }
  render() {
    return !this.state.todos ? (
      <h1>Loading...</h1>
    ) : (
      this.state.todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)
    );
  }
}

export default TodoList;
