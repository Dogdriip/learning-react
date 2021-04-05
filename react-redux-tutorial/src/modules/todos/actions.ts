import { createAction } from "typesafe-actions";
import { Todo } from "../../types/Todo";

// 액션 타입 선언
export const ADD_TODO = "todos/ADD_TODO" as const;
export const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
export const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값

// 액션 생성 함수
export const addTodo = createAction(ADD_TODO, (text: string) => ({
  id: nextId++,
  text,
  done: false,
}))<Todo>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
