// src/components/login.js

import React, { useState } from "react"
import { navigate, Link } from "gatsby"
import { handleLogin, isLoggedIn, logout } from "../service/auth"

import {
  TextField, 
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Auth = () => {
  const classes = useStyles()
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'pass':
        setPass(event.target.value);
        break;
      default:
        console.log('key not found');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const state = {
      username: name,
      password: pass,
    }
    handleLogin(state)
    navigate(`/login/secret`)
  };

  const logoutHandler = () => {
    navigate('/')
    return
  }

  return (
    <>
      {isLoggedIn() ?
        <>
          <Typography variant="h2" style={{paddingBottom: "10px"}}>
            ログイン済みです
          </Typography>

          <Button variant="contained" size="large" color="primary" className={classes.button} component={Link} to="/login/secret">To Member page</Button>
          <Button variant="outlined" size="large" color="inherit" className={classes.button} onClick={e => logout(logoutHandler)}>Logout</Button>
        </>
        :
        <>
          <Typography variant="h2" style={{textAlign: "center", padding: "10px"}}>
            Member authentication
          </Typography>
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <TextField label="Username" variant="filled" type="text" name="name" value={name} onChange={handleChange} />
            <TextField label="Password" variant="filled" type="password" name="pass" value={pass} onChange={handleChange} />
            <Button variant="contained" color="primary" type="submit" value="Submit">Login</Button>
          </form>
        </>
      }
    </>
  );
}
export default Auth