import React from "react";
import { Todo } from "../entities/Todo";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({
  todos,
  onRemove,
  onToggle,
}: {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
