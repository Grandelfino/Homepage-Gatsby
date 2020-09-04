import React from "react"
import { graphql, Link } from 'gatsby'

import {
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  Box,
  makeStyles,
  Typography,
  Paper,
  ThemeProvider,
  Grid,
  Divider,
} from '@material-ui/core'

import index_1 from '../images/index/index_1.jpg';

import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar';
import SEO from '../components/SEO'

import Image from '../components/Image'

export const useStyle = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
    display: 'flex',
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
    marginBottom: theme.spacing(3),
    borderColor: 'white',
    color: 'white',
  },
  button : {
    fontSize: '1rem',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.dark,
  },
  titleText : {
    textAlign: 'center',
    fontFamily: 'Noto Sans',
    fontSize: '2rem',
    padding: theme.spacing(3),
  },
  subText: {
    textAlign: 'center',
    fontFamily: 'Noto Sans JP',
    fontSize: '1rem',
    paddingBottom: theme.spacing(5),
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
            variant="outlined" 
            className={classes.aboutButton}
            >
            About US
          </Button>
        </Box>
      </Paper>
    </div>
  )
}

const  AboutUS = () => {
  const classes = useStyle()
  return (
    <Grid align='center'>
      <Box p={3}>
        <Typography variant = 'h1' className={classes.titleText}>
          Grandelfino
        </Typography>
        <Typography variant='body1' className={classes.subText}>
          Grandelfinoは京都工芸繊維大学の学生フォーミュラプロジェクトチームです。2007年度大会から参戦し、2012・2016・2017年度には総合優勝を果たしました。
        </Typography>
          <Box width='80%' justify='center'>
            <Card elevation={1} variant='outlined'>
              <CardMedia>
                <Image filename='index_2.png' />
              </CardMedia>
            </Card>
          </Box>
          <Button 
            variant='outlined' 
            color='default'
            className={classes.button}
            component={Link}
            to="/about_us"
            >
            More Detail
          </Button>
        <Divider/>
      </Box>
    </Grid>
  )
}

const  AboutSAE = () => {
  const classes = useStyle()
  return (
    <Grid align='center'>
      <Box p={3}>
        <Typography variant = 'h1' className={classes.titleText}>
          全日本学生フォーミュラ大会
        </Typography>
        <Typography variant='body1' className={classes.subText}>
        全日本学生フォーミュラ大会は大学生が自らの手でフォーミュラカーを製作し、 競い合うことで、モノづくりの実践的な知識を身につけようというものです。
        </Typography>
        <Box width='80%' justify='center'>
          <Card elevation={1} variant='outlined'>
            <CardMedia>
              <Image filename='JFSAE_logo.png' />
            </CardMedia>
          </Card>
        </Box>
        <Button 
          variant='outlined' 
          color='default'
          className={classes.button}
          component={Link}
          to="/about_sae"
          >
          More Detail
        </Button>
        <Divider/>
      </Box>
    </Grid>
  )
}

const  AboutSponsor = () => {
  const classes = useStyle()
  return (
    <Grid align='center'>
      <Box p={3}>
        <Typography variant = 'h1' className={classes.titleText}>
          スポンサー
        </Typography>
        <Typography variant='body1' className={classes.subText}>
          Grandelfinoの活動は、多数のスポンサー様によって支えられております。 私たちを支えてくださるスポンサー様を紹介いたします。
        </Typography>
        <Box width='80%' justify='center'>
          <Card elevation={1} variant='outlined'>
            <CardMedia>
              <Image filename='index_3.jpg' />
            </CardMedia>
          </Card>
        </Box>
        <Button 
          variant='outlined' 
          className={classes.button}
          component={Link}
          to="/sponsor"
          color='default'
          >
          More Detail
        </Button>
        <Divider/>
      </Box>
    </Grid>
  )
}


export default function Home() {
  return (
    <>
      <SEO/>
      <Layout>
        <NavBar/>
        <Top/>
        <Container maxWidth='md'>
          <AboutUS/>
          <AboutSAE/>
          <AboutSponsor/>
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