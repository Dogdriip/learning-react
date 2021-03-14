import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { Todo } from "../entities/Todo";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({
  todo,
  onRemove,
  onToggle,
}: {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
