import React, { useState, useEffect } from 'react'
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container, 
  Box,
  Typography,
  } from '@material-ui/core'
  
import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'

const Page404 = () => {
  return(
    <>
      <Layout>
        <NavBar/>
        <Typography>
          404 Page Not found
        </Typography>
      </Layout>
    </>
  )
}

export default Page404