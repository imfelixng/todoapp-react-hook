import React, { memo } from 'react'
import {AppBar, Toolbar, Typography, Paper} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => (
    {
        wrapPaper: {
            padding: 0,
            margin: 0,
            backgroundColor: '#fafafa'
        },
        appBar: {
            height: 64
        },
        toolBar: {
            height: 64
        }
    }
);

const Layout = (props) => {

    const {classes} = props;

  return (
      <React.Fragment>
          <Paper 
            elevation = {2}
            className = {classes.wrapPaper}
          >
            <AppBar 
                color = "primary" 
                position = "static"
                className = {classes.appBar}
            >
                <Toolbar 
                    className = {classes.toolBar}
                >
                    <Typography color = 'inherit'> TODO APP</Typography>
                </Toolbar>
            </AppBar>
          </Paper>
      </React.Fragment>
  )
}

export default withStyles(styles)(memo(Layout));
