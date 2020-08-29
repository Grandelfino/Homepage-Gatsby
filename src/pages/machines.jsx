import React from 'react'
import { graphql, useStaticQuery, Link, StaticQuery } from 'gatsby'
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

import Image from '../components/Image'
import SEO from '../components/SEO'
import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  carName: {
    fontFamily: 'Noto Sans JP',
    fontSize: '2rem',
    textAlign: 'left',
    paddingBottom: theme.spacing(3)
  },
  carText :{
    fontFamily: 'Noto Sans JP',
    color: 'gray',
    textAlign: 'left',
  },
  media : {
    maxHeight: '350px'
  },
  button: {
    fontFamily: 'Noto Sans JP',
    fontSize: '1rem'
  },
  title: {
    fontFamily: 'Noto Sans JP',
    fontSize: '2rem',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(2),
  },
  body: {
    fontFamily: "Noto Sans JP",
    fontSize: '1rem',
    paddingBottom: theme.spacing(3),
  },
  paper: {
    paddingLeft: 50, 
    paddingRight: 50,
    [theme.breakpoints.down('sm')] : {
      paddingLeft: 20, 
      paddingRight: 20,
    }
  }
}))

const MachineCard = (props) => {
  const machine = props.machine
  const carName = machine.carName
  const description = machine.description
  const histories = props.histories
  let entry = '/history'
  // console.log(carName)
  Object.values(histories).map((item) => {
    if (item.carName === carName) {
      entry = '/history#' + item.id
    }
  })
  const classes = useStyles()
  return (
    <>
      <Card elevation={3}>
        <CardMedia
          component='img'
          src={machine.image.url}
          className={classes.media}
        />
        <CardContent>
          <Typography variant='h2' className={classes.carName}>{carName}</Typography>
          <Typography variant='body1' className={classes.carText}>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button 
            size='large' 
            color='primary' 
            className={classes.button}
            component={Link}
            to={entry}
            >
            大会成績を見る
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

const Machine = () => {
  const classes = useStyles()
  const {gcms: {machines, histories}} = useStaticQuery(pageQuery)
  
  return (
    <Grid container spacing={3}>
      {machines.map(({...machine}) => (
        <Grid item xs={12}>
          <MachineCard machine={machine} histories={histories}/>
        </Grid>
      ))}
    </Grid>
  )
}

const Title = () => {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h1' className={classes.title}>
        マシンについて
      </Typography>
      <Typography variant='body1' className={classes.body}>
        我々の活動はフォーミュラスタイルのレーシングカーを設計製作し、 全日本学生フォーミュラ大会に出場することにあります。 
        活動初年度の2007年度は試作車としてGDF-01、大会出場車両としてGDF-02を製作しました。 以後、毎年１台のペースで設計製作を行っております。
      </Typography>
      <Typography variant='body1' className={classes.body}>
        車両名にある「GDF-**」というのは、チーム名の「GranDelFino」を略して「GDF」とし、 そのあとにある数字は、何両目の車両であるかを意味しています。
      </Typography>
      <Divider/>
      <Typography variant='h1' className={classes.title}>
        歴代車両
      </Typography>
    </>
  )
}

const Machines = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Grandelfino - Machines"/>
      <NavBar/>
      <Container maxWidth='lg' style={{marginTop: 10}}>
        <Paper className = {classes.paper}>
        <Title/>
        <Machine/>
        </Paper>
      </Container>
    </Layout>
  )
}

export default Machines

const pageQuery = graphql`
  {
    gcms {
      machines(orderBy: carName_DESC) {
        image {
          url
        }
        carName
        description
      }
      histories {
        id
        carName
      }
    }
  }
`