import { ActionType } from "typesafe-actions";
import { Todo } from "../../types/Todo";
import * as actions from "./actions";

// 모든 액션 객체들에 대한 타입 준비
export type TodosAction = ActionType<typeof actions>;

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type TodosState = Todo[];
