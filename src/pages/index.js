import React from "react"
import { graphql, Link } from 'gatsby'

import {
  Button,
  Container,
  Box,
  makeStyles,
  Typography,
  Paper,
  ThemeProvider
} from '@material-ui/core'

import index_1 from '../images/index_1.jpg';

import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar';

export const useStyle = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
    display: 'flex',
    paddingTop: theme.spacing(5),
    '& > *': {
      // margin: theme.spacing(3),
      width:'100%',
      height: theme.spacing(80),
      [theme.breakpoints.down('md')]: {
        height: theme.spacing(50)
      }
    },
  },
  paper: {
    backgroundImage: `url(${index_1})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  mainHead: {
    fontSize: '5rem',
    color: "white",
    marginTop: theme.spacing(30),
    fontWeight: "bold",
    fontFamily: "Noto Sans",
    letterSpacing: '1px',
    [theme.breakpoints.only('md')]: {
      marginTop: theme.spacing(15),
      fontSize: '4rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(15),
      fontSize: '3rem'
    },
  },
  subHead: {
    fontSize: '2rem',
    [theme.breakpoints.only('md')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem'
    },
    color: "gainsboro",
    fontFamily: "Noto Sans",
  },
  mainBox: {
    textAlign: "left",
    marginLeft: "10%",
    marginRight: "40%",
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      textAlign: "center"
    },
  },
  aboutButton: {
    fontSize: '1rem',
    marginTop: theme.spacing(3),
    [theme.breakpoints.only('md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem'
    }
  }
}))


export const Top = () => {
  const classes = useStyle();
  return(
    <div className={classes.root}>
      <Paper className={classes.paper} square elevation={0}>
        <Box className={classes.mainBox}>
          <Typography className={classes.mainHead}>
            Grandelfino
          </Typography>
          <Typography className={classes.subHead}>
            We are a student formula project team of Kyoto Institute of Technology.
          </Typography>
          <Button 
            component={Link}
            to="/about_us"
            color="primary" 
            variant="contained" 
            className={classes.aboutButton}
            >
            About US
          </Button>
        </Box>
      </Paper>
  </div>
  )
}

export default function Home() {
  return (
    <>
      <Layout>
        <NavBar/>
        <Top/>
        <Container maxWidth="md">
        </Container>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "index_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800 ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`