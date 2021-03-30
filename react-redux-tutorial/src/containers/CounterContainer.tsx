import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const mapStateToProps = (state: any) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      increase,
      decrease,
    },
    dispatch,
  );

const CounterContainer = ({
  number,
  increase,
  decrease,
}: {
  number: number;
  increase: () => void;
  decrease: () => void;
}) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
