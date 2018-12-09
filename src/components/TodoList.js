import React, {memo} from 'react'
import {List, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import TodoListItem from './TodoListItem';

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
  return (
    <React.Fragment>
      {
        props.items && props.items.length > 0 &&
        <Paper className = {classes.wrapperPaper}>
            <List className = {classes.listTodo}>
                {
                    props.items && props.items.map((todo, index) => (
                        <TodoListItem 
                            {...todo}
                            key = {index}
                            divider = {index !== props.items.length - 1}
                            onButtonClick = {() => props.onItemRemove(index)}
                            onCheckBoxToggle = {() => props.onItemCheck(index)}
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
