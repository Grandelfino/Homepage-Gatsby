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

const Cost = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head}>
            コスト審査
          </Typography>
          <Typography variant="body1" className={classes.body}>
            写コスト審査では、車両を見ながら事前に提出したコストレポートのコスト精度、チームによる製造度合等を確認し、 レポートのコストと車両との適合を審査されます。 
            また、一般に購入品目となる2項目について、 部品製造プロセスなどの口頭試問が行われ、それらの知識・理解度を評価されます。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="Cost.jpg" alt='sponsor'/>
        </Grid>
      </Grid>
    </>
  )
}

const Presentation = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head}>
            プレゼン審査
          </Typography>
          <Typography variant="body1" className={classes.body}>
            『審査のコンセプトに沿い、製造会社の役員に設計上の優れていることを確信させる』という仮想のシチュエーション のもとで、学生のプレゼン能力について審査されます。          
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="Presentation.jpg" alt='report'/>
        </Grid>
      </Grid>
    </>
  )
}

const Design = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head}>
            デザイン審査
          </Typography>
          <Typography variant="body1" className={classes.body}>
            事前に提出する設計資料と実際の車両をもとに、どのような技術が使われているか、どのような工夫がなされているのか などを口頭質問を交えて評価されます。 静的審査の中では最も得点配分の大きい審査です。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="Design.jpg" alt='panel'/>
        </Grid>
      </Grid>
    </>
  )
}

const Static = () => {
  const classes = useStyle()

  return (
    <Layout>
      <SEO title="Grandelfino - Static Events"/>
      <NavBar/>
      <Container maxWidth="lg">
        <Paper className={classes.paper}>
          <Typography variant="h1" className={classes.head}>
            静的審査
          </Typography>
          <Typography variant="body1" className={classes.body}>
            静的審査ではマシンを実際に販売すると仮定した際に、どれだけコストがかかるのか・どのような戦略で販売するのかなど、 設計上の工夫や提出した書類の完成度を競います。
          </Typography>
          <Cost/>
          <Divider/>
          <Presentation/>
          <Divider/>
          <Design/>
        </Paper>
      </Container>
    </Layout>
  )
}

export default Static