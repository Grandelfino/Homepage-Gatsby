import React from 'react'
import { graphql, useStaticQuery, Link, StaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container, 
  Paper, 
  Typography, 
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  Grid,
  } from '@material-ui/core'

import Image from '../components/Image'

import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'

const Dynamic = () => {
  return (
    <Layout>
      <NavBar/>
    </Layout>
  )
}

export default Dynamic