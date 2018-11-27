import React from "react";
import { Input, Button, List } from "antd";

// 无状态组件
const TodoListUi = props => {
  return (
    <div>
      <div
        style={{
          margin: "10px"
        }}
      >
        <Input
          placeholder="todo info"
          onChange={props.handleChange}
          value={props.inputValue}
          style={{
            width: "300px",
            marginRight: "10px"
          }}
        />
        <Button type="primary" onClick={props.handleSubmit}>
          提交
        </Button>
      </div>
      <List
        style={{
          marginLeft: "10px",
          width: "300px"
        }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};
export default TodoListUi;
