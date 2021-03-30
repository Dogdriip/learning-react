import React from "react";
import { TodosProps } from "../types/TodosProps";
import TodoItem from "./TodoItem";

const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록이 들어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}: TodosProps) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChangeInput} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo.todo}
            key={todo.todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default Todos;
