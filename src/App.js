import React, { useState } from "react";

import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {

  const [todos, setTodos] = useState ([
    {
      id: 1,
      text: '할일 첫번째',
      checked: true,
    },
    {
      id: 2,
      text: '할일 두번째',
      checked: true,
    },
    {
      id: 3,
      text: '할일 세번째',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos = {todos} />
    </TodoTemplate>
  );
  
};


export default App;
