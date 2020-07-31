import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { 
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  IconButton,
  Divider,
} from '@material-ui/core';

import {Link} from 'gatsby';

import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles({
  root: {
    // flexGrow: 1,
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  },
  list: {
    width: 250,
  },
  appbar: {
    height: 50,
    position: "fixed",
    color: "white",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "inherit",
  }
});

export default function NavBar() {
  const classes = useStyle();
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!isOpen);
  }
  const closeDrawer = () => {
    setOpen(false);
  }

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/about_us">
          <ListItemText primary="チーム紹介" style={{fontFamily: "Noto Sans JP"}} />
        </ListItem>
        <ListItem button component={Link} to="/member">
          <ListItemText primary="メンバー"/>
        </ListItem>
        <ListItem button component={Link} to="/sponsor">
          <ListItemText primary="スポンサー"/>
        </ListItem>
        <ListItem button component={Link} to="/history">
          <ListItemText primary="大会成績"/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="Menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer 
            open={isOpen}
            onClose={closeDrawer}>
              <div // eslint-disable-line jsx-a11y/click-events-have-key-events
                tabIndex={0}
                role="button"
                onClick={toggleDrawer}>
                  {sideList}
              </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}