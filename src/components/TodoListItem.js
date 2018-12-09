import React, {memo} from 'react'
import {ListItem, Checkbox, IconButton, ListItemText, ListItemSecondaryAction} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';


const styles = theme => ({
    
});

const TodoListItem = (props) => {
  return (
    <React.Fragment>
      <ListItem divider = {props.divider}>
        <Checkbox 
          onClick = {props.onCheckBoxToggle}
          checked = {props.checked}
          disableRipple
        />
        <ListItemText primary = {props.text}/>
        <ListItemSecondaryAction>
          <IconButton aria-label = "Delete Todo" onClick = {props.onButtonClick}>
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  )
}

export default withStyles(styles)(memo(TodoListItem));
