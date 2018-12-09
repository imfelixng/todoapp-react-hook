import React, {memo} from 'react'
import {TextField, Paper, Button, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

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
  return (
    <React.Fragment>
      <Paper className = {classes.wrapPaper}>
          <Grid container>
            <Grid item xs = {10} md = {11} className = {classes.gridNameTodo}>
                <TextField 
                    placeholder = "Enter todo here"
                    value = {props.inputValue}
                    onChange = {props.onInputChange}
                    onKeyPress = {props.onInputKeyPress}
                    fullWidth
                />
            </Grid>
            <Grid xs = {2} md = {1} item>
                <Button 
                    fullWidth
                    color = "secondary"
                    variant = "contained"
                    onClick = {props.onButtonClick}
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
