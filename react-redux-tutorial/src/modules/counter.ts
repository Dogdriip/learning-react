import { CounterState } from "../types/CounterState";

const INCREASE: string = "counter/INCREASE" as const;
const DECREASE: string = "counter/DECREASE" as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

const initialState: CounterState = {
  number: 0,
};

const counter = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
