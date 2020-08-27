
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color:'#164a7c'
    },
    appBar: {
        backgroundColor: '#efa707',
        
      },
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(2),
      textAlign:'left',
      color: '#0b1f57',
      fontWeight:'bold!important'
    },
  }));

function Nav() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography edge="start" variant="h6" className={classes.title}>
              pawiis
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Nav;