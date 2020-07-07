import React from "react";
import TodoList from "./components/TodoList";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TodoList} />
        {/* <Route exact path="/create" component={TodoCreate} /> */}
        {/* <Route exact path="/todos/:todoId" component={TodoDetail} /> */}
        {/* <Route exact path="/update/:todoId" component={TodoUpdate} /> */}
      </Switch>
      <TodoList />
    </div>
  );
}

export default App;
