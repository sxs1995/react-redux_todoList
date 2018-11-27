import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";

import {
  getInputChangeAction,
  getAddTodoList,
  getDeleteTodoList,
  getInitList
} from "./store/actionCreators";
import TodoListUi from "./TodoListUi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
  }

  handleStoreChange = () => {
    this.setState(store.getState());
  };

  handleChange = e => {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  };

  handleSubmit = () => {
    const action = getAddTodoList();
    if (this.state.inputValue !== "") {
      store.dispatch(action);
    }
  };

  handleItemDelete = index => {
    const action = getDeleteTodoList(index);
    store.dispatch(action);
  };

  render() {
    return (
      <TodoListUi
        handleChange={this.handleChange}
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleSubmit={this.handleSubmit}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }
}

export default App;
