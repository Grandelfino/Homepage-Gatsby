import React, { useState, useEffect } from 'react'
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container, 
  Box,
  } from '@material-ui/core'
  
import { getUser, isLoggedIn } from "../service/auth"

import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'
import Auth from '../components/Auth'

import PrivateRoute from "../components/PrivateRoute"
import Secret from "../components/Secret"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3)
  },
}))

const Login = () => {
  const classes = useStyles()
  return(
    <>
      <Layout>
        <NavBar/>
        <Container className={classes.root}>
          <Box align="center">
            <Router basepath="/login">
              <PrivateRoute path="/secret" component={Secret} />
              <Auth path="/auth" />
            </Router>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export default Login