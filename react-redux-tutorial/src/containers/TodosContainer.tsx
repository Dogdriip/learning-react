import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const mapStateToProps = (state: any) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeInput, insert, toggle, remove }, dispatch);

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
