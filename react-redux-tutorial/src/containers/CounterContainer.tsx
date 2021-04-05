import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { Rootstate } from "../modules";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const number = useSelector((state: Rootstate) => state.counter.number);
  // 디스패치 함수를 가져옵니다
  const dispatch = useDispatch();

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
