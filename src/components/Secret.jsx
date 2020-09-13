import React from 'react'
import { navigate, Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Button,
  Container, 
  Paper, 
  Typography, 
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Divider,
  Grid,
  } from '@material-ui/core'

import { isLoggedIn, logout } from "../service/auth"

const Secret = () => {
  console.log(isLoggedIn())
  const logoutHandler = () => {
    navigate('/')
    return
  }
  return(
    <>
      <Typography variant="h1" >
        メンバー専用お役立ちリンク集
      </Typography>
      <Button
        style = {{margin: "10px"}}
        variant="outlined"
        onClick={e => logout(logoutHandler)}>Logout</Button>
    </>
  )
}

export default Secret