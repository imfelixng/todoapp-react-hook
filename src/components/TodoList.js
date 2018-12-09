import React, {memo, useContext} from 'react'
import {List, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import TodoListItem from './TodoListItem';

import TodoContext from '../contexts/todo-context';

const styles = theme => ({
    wrapperPaper: {
        margin: 16
    },
    listTodo: {
        overflow: 'scroll'
    }
});



const TodoList = (props) => {
    const {classes} = props;
    const {todos, checkTodo, removeTodo} = useContext(TodoContext);
  return (
    <React.Fragment>
      {
        todos && todos.length > 0 &&
        <Paper className = {classes.wrapperPaper}>
            <List className = {classes.listTodo}>
                {
                    todos && todos.map((todo, index) => (
                        <TodoListItem 
                            {...todo}
                            key = {index}
                            divider = {index !== todos.length - 1}
                            onButtonClick = {() => removeTodo(index)}
                            onCheckBoxToggle = {() => checkTodo(index)}
                        />
                    ))
                }
            </List>
        </Paper>
      }
    </React.Fragment>
  )
}

export default withStyles(styles)(memo(TodoList));
