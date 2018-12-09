import React, { memo } from 'react';
import Layout from './Layout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

import InputContext from '../contexts/input-context';
import TodoContext from '../contexts/todo-context';

import {useInputValue, useTodo} from './../hooks/custom-hook';


const App = (props) => {

  const {inputValue, changeInput, clearInput, keyInput} = useInputValue();
  const {todos, addTodo, checkTodo, removeTodo} = useTodo();

  const stateValueInput = {
    inputValue, 
    changeInput, 
    clearInput, 
    keyInput
  }

  const stateValueTodo = {
    todos, 
    addTodo,
    checkTodo, 
    removeTodo
  }

    return (
      <TodoContext.Provider value = {stateValueTodo}>
        <React.Fragment>
          <Layout />
          <InputContext.Provider value = {stateValueInput}>
            <AddTodo />
          </InputContext.Provider>
          <TodoList />
        </React.Fragment>
      </TodoContext.Provider>
    );
}

export default memo(App);
