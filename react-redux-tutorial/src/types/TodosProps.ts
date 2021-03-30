import { Todo } from "./Todo";

type TodosProps = {
  input: string;
  todos: Todo[];
  onChangeInput: (input: string) => {};
  onInsert: (text: string) => {};
  onToggle: (id: number) => {};
  onRemove: (id: number) => {};
};

export type { TodosProps };
