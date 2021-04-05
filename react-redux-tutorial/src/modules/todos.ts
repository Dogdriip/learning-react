import { Todo } from "../types/Todo";

// 액션 타입 선언
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값

// 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  // 액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일합니다
  // 이는 FSA (https://github.com/redux-utilities/flux-standard-action) 라는 규칙인데
  // 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
  // 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련돤 라이브러리를 사용 할 수 있게 해줍니다.
  // 다만, 무조건 꼭 따를 필요는 없습니다.
  payload: { id: nextId++, text },
});
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id });
export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id });

// 모든 액션 객체들에 대한 타입 준비
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
type TodosState = Todo[];

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
const todos = (state: TodosState = initialState, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo: Todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    case REMOVE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;
