import React, {memo, useContext} from 'react'
import {TextField, Paper, Button, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import InputContext from '../contexts/input-context';
import TodoContext from '../contexts/todo-context';

const styles = theme => ({
    wrapPaper: {
        margin: 16,
        padding: 16
    },
    gridNameTodo: {
        paddingRight: 16
    }
});

const AddTodo = (props) => {
    const {classes} = props;
    const {inputValue, changeInput, clearInput, keyInput} = useContext(InputContext);
    const {addTodo} = useContext(TodoContext);
  return (
    <React.Fragment>
      <Paper className = {classes.wrapPaper}>
          <Grid container>
            <Grid item xs = {10} md = {11} className = {classes.gridNameTodo}>
                <TextField 
                    placeholder = "Enter todo here"
                    value = {inputValue}
                    onChange = {(e) =>changeInput(e)}
                    onKeyPress = {(e) => {keyInput(e, () => {clearInput(); addTodo(inputValue)})}}
                    fullWidth
                />
            </Grid>
            <Grid xs = {2} md = {1} item>
                <Button 
                    fullWidth
                    color = "secondary"
                    variant = "contained"
                    onClick = {() => {clearInput(); addTodo(inputValue)}}
                >
                    Add
                </Button>
            </Grid>
          </Grid>
      </Paper>
    </React.Fragment>
  )
}

export default withStyles(styles)(memo(AddTodo));
