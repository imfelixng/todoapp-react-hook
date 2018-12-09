import React, { memo } from 'react';
import Layout from './Layout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

import {useInputValue, useTodo} from './../hooks/custom-hook';


const App = (props) => {

  const {inputValue, changeInput, clearInput, keyInput} = useInputValue();
  const {todos, addTodo, checkTodo, removeTodo} = useTodo();

    return (
      <React.Fragment>
        <Layout />
        <AddTodo 
          inputValue = {inputValue}
          onInputChange = {changeInput}
          onButtonClick = {() => { clearInput(); addTodo(inputValue) }}
          onInputKeyPress = {e => keyInput(e, () => { clearInput(); addTodo(inputValue) })}
        />
        <TodoList 
          items = {todos}
          onItemCheck = {index => checkTodo(index)}
          onItemRemove = {index => removeTodo(index)}
        />
      </React.Fragment>
    );
}

export default memo(App);
