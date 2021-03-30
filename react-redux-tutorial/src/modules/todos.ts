import { Todo } from "../types/Todo";

const CHANGE_INPUT = "todos/CHANGE_INPUT" as const; // 인풋 값을 변경함
const INSERT = "todos/INSERT" as const; // 새로운 todo를 등록함
const TOGGLE = "todos/TOGGLE" as const; // todo를 체크/체크 해제함
const REMOVE = "todos/REMOVE" as const; // todo를 제거함

export const changeInput = (input: string) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;
export const insert = (text: string) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id: number) => ({
  type: TOGGLE,
  id,
});

export const remove = (id: number) => ({
  type: REMOVE,
  id,
});

type TodosState = {
  input: string;
  todos: Todo[];
};

type TodosAction =
  | ReturnType<typeof changeInput>
  | ReturnType<typeof insert>
  | ReturnType<typeof toggle>
  | ReturnType<typeof remove>;

const initialState: TodosState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

const todos = (state: TodosState = initialState, action: TodosAction) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo: Todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todos;
