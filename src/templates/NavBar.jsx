import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { 
  AppBar,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  IconButton,
  Divider,
  Typography,
  CssBaseline,
} from '@material-ui/core';

import {Link} from 'gatsby';

import MenuIcon from '@material-ui/icons/Menu'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { ThemeConsumer } from 'styled-components';


const useStyle = makeStyles((theme) => ({
  root: {
  },
  list: {
    minWidth: 300,
  },
  appbar: {
    height: 50,
    position: "sticky",
    color: "white",
    zIndex: 1000,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "inherit",
  },
  nested :{
    paddingLeft: theme.spacing(5)
  }
}));

export default function NavBar() {
  const classes = useStyle();
  const [isOpen, setOpen] = useState(false)
  const [colOpen, setColOpen] = useState(false)
  const toggleDrawer = () => {
    setOpen(!isOpen);
  }
  const closeDrawer = () => {
    setOpen(false);
  }
  const toggleList = () =>{
    setColOpen(!colOpen)
  }

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText disableTypography
            primary={<Typography style={{fontSize: '1rem'}}>Home</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/about_us">
          <ListItemText primary="チーム紹介"/>
        </ListItem>
        <ListItem button component={Link} to="/history">
          <ListItemText primary="大会成績"/>
        </ListItem>
        <ListItem button component={Link} to="/member">
          <ListItemText primary="メンバー"/>
        </ListItem>
        <ListItem button component={Link} to="/sponsor">
          <ListItemText primary="スポンサー"/>
        </ListItem>
        <ListItem button component={Link} to="/machines">
          <ListItemText primary="マシン紹介"/>
        </ListItem>
        <ListItem button onClick={toggleList}>
          <ListItemText primary='Formula SAE'/>
          {colOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={colOpen} timeout='auto' unmountOnExit>
          <List>
            <ListItem button className={classes.nested} component={Link} to='/about_sae'>
              <ListItemText primary="学生フォーミュラとは" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/static'>
              <ListItemText primary="静的審査" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/dynamic'>
              <ListItemText primary="動的審査" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <>
    <CssBaseline/>
    <AppBar className={classes.appbar}>
      <Toolbar>
        <IconButton className={classes.menuButton} aria-label="Menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer 
          open={isOpen}
          onClose={closeDrawer}>
          {sideList}
        </Drawer>
      </Toolbar>
    </AppBar>
    </>
  )
}