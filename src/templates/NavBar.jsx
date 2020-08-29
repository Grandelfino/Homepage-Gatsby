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
  ListItemIcon,
} from '@material-ui/core';

import {Link} from 'gatsby';

import MenuIcon from '@material-ui/icons/Menu'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Home from '@material-ui/icons/Home'
import Group from '@material-ui/icons/Group'
import Timeline from '@material-ui/icons/Timeline'
import Person from '@material-ui/icons/Person'
import Business from '@material-ui/icons/Business'
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports'
import Policy from '@material-ui/icons/Policy'
import Assignment from '@material-ui/icons/Assignment'
import PlaceIcon from '@material-ui/icons/Place'

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
  const [saeOpen, setsaeOpen] = useState(false)
  const [sponsorOpen, setsponsorOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!isOpen);
  }
  const closeDrawer = () => {
    setOpen(false);
  }
  const toggleSAE = () =>{
    setsaeOpen(!saeOpen)
  }

  const toggleSponsor = () =>{
    setsponsorOpen(!sponsorOpen)
  }

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemText disableTypography
            primary={<Typography style={{fontSize: '1rem'}}>Home</Typography>} />
        </ListItem>
        <ListItem button component={Link} to="/about_us">
          <ListItemIcon>
            <Group/>
          </ListItemIcon>
          <ListItemText primary="チーム紹介"/>
        </ListItem>
        <ListItem button component={Link} to="/history">
          <ListItemIcon>
            <Timeline/>
          </ListItemIcon>
          <ListItemText primary="大会成績"/>
        </ListItem>
        <ListItem button component={Link} to="/member">
          <ListItemIcon>
            <Person/>
          </ListItemIcon>
          <ListItemText primary="メンバー"/>
        </ListItem>
        <ListItem button component={Link} to="/machines">
          <ListItemIcon>
            <SportsMotorsportsIcon/>
          </ListItemIcon>
          <ListItemText primary="マシン紹介"/>
        </ListItem>
        <ListItem button component={Link} to="https://www.grandelfino.net/blog/">
          <ListItemIcon>
            <Assignment/>
          </ListItemIcon>
          <ListItemText primary="活動記録"/>
        </ListItem>
        <ListItem button component={Link} to="/contact_us">
          <ListItemIcon>
            <PlaceIcon/>
          </ListItemIcon>
          <ListItemText primary="お問い合わせ"/>
        </ListItem>
        <ListItem  button onClick={toggleSponsor}>
          <ListItemIcon>
            <Business/>
          </ListItemIcon>
          <ListItemText primary="スポンサー"/>
          {sponsorOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={sponsorOpen} timeout='auto' unmountOnExit>
          <List>
            <ListItem button className={classes.nested} component={Link} to='/sponsor'>
              <ListItemText primary="スポンサー一覧" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to='/sponsorship'>
              <ListItemText primary="スポンサーシップについて" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={toggleSAE}>
          <ListItemText primary='Formula SAE'/>
          {saeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={saeOpen} timeout='auto' unmountOnExit>
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
        <ListItem button component={Link} to="/policy">
          <ListItemIcon>
            <Policy/>
          </ListItemIcon>
          <ListItemText primary="サイトポリシー"/>
        </ListItem>
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