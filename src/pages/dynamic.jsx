import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container, 
  Paper, 
  Typography, 
  Divider,
  Grid,
  } from '@material-ui/core'

import Image from '../components/Image'

import SEO from '../components/SEO'
import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'

export const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  media: {
    height: 200,
    objectFit: 'contain'
  },
  head: {
    textAlign: 'left',
    fontFamily: 'Noto Sans JP',
    fontSize: '2rem',
    margin: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    },
  },
  body: {
    textAlign: 'left',
    fontFamily: 'Noto Sans JP',
    fontSize: '0.96rem',
    margin: theme.spacing(1)
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Noto Sans JP',
    fontSize: '1.5rem',
    marginBottom: theme.spacing(1)
  },
  brief: {
    textAlign: 'left',
    fontFamily: 'Noto Sans JP',
    fontSize: '1rem',
    color: "gray",
  },
  cards: {
    display: "flex"
  },
  paper: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  }
}));
const Acc = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head}>
            アクセラレーション
          </Typography>
          <Typography variant="body1" className={classes.body}>
            75mの直線コースにおいて、静止状態から加速し、タイムを計測することで、マシンの加速性能を競います。 各チーム２名のドライバーが２回ずつ走行でき、最も速いタイムが記録されます。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="Acc.jpg" alt='ACC'/>
        </Grid>
      </Grid>
    </>
  )
}

const Skidpad = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head}>
            スキッドパッド
          </Typography>
          <Typography variant="body1" className={classes.body}>
            8の字状のコースを走行し、マシンのコーナリング性能を競います。 アクセラレーションと同様、各チーム２名のドライバーが２回ずつ走行でき、最も速いタイムが記録されます。          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="Skidpad.jpg" alt='Skidpad'/>
        </Grid>
      </Grid>
    </>
  )
}

const AutoX = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head}>
            オートクロス
          </Typography>
          <Typography variant="body1" className={classes.body}>
            事前に提出する設計資料と実際の車両をもとに、どのような技術が使われているか、どのような工夫がなされているのか などを口頭質問を交えて評価されます。 静的審査の中では最も得点配分の大きい審査です。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="Autocross.JPG" alt='Autocross'/>
        </Grid>
      </Grid>
    </>
  )
}

const Endurance = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head}>
            エンデュランス
          </Typography>
          <Typography variant="body1" className={classes.body}>
            直線・ターン・スラローム・シケインなどによる約800mのコースを2周走行し、マシンの総合的な性能を競います。 
            各チーム２名のドライバーが２回ずつ走行でき、最も速いタイムが記録されます。 オートクロスのタイムにより、４日目以降に行われるエンデュランス競技の出走順が決まります。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="Endurance.jpg" alt='Endurance'/>
        </Grid>
      </Grid>
    </>
  )
}

const Static = () => {
  const classes = useStyle()

  return (
    <Layout>
      <SEO title="Grandelfino - Dynamic Events"/>
      <NavBar/>
      <Container maxWidth="lg">
        <Paper className={classes.paper}>
          <Typography variant="h1" className={classes.head}>
            動的審査
          </Typography>
          <Typography variant="body1" className={classes.body}>
            動的審査では製作したマシンを実際に走行させ、4種類の審査でマシンの実性能を競います。
          </Typography>
          <Acc/>
          <Divider/>
          <Skidpad/>
          <Divider/>
          <AutoX/>
          <Divider/>
          <Endurance/>
        </Paper>
      </Container>
    </Layout>
  )
}

export default Static