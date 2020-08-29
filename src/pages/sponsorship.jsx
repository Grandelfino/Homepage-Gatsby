import React from 'react';
import { 
  makeStyles, 
  Typography, 
  Container, 
  Divider, 
  Grid,
  Paper,
  } from '@material-ui/core';

import SEO from '../components/SEO'
import Layout from '../templates/Layout';
import NavBar from '../templates/NavBar'

import Image from '../components/Image'

export const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  head: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    fontFamily: 'Noto Sans JP',
    fontSize: '2rem',
    textAlign: 'left',
  },
  body: {
    fontFamily: 'Noto Sans JP',
    fontSize: '1rem',
    textAlign: 'left',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  paper: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const HeadText = () => {
  const classes = useStyle()

  return (
    <>
      <Typography variant='h1' className={classes.head}>
        スポンサーシップについて
      </Typography>
      <Typography variant='body1' className={classes.body}>
        私たちGrandelfinoの活動は様々なスポンサー様のご支援により成り立っております。 
        技術支援、加工支援、製品支援、金銭支援など様々なスポンサー様のご助力があってこそ、 学生がフォーミュラーカーを作ることができております。 
        皆様の温かいご支援のもと、より良いフォーミュラーカーを作れるよう日々努力いたします。 Grandelfinoをなにとぞよろしくお願いします。
      </Typography>
      <Typography variant='body1' className={classes.body}>
        現在、この活動にご理解いただき、我々をご支援していただけるスポンサー様を募集しております。 
        法人・個人を問わず、ご興味をもたれた方はご連絡いただければ幸いです。 支援してくださる企業や団体、個人の方々には、毎月の活動報告書だけでなく、 
        車両へのステッカー掲載やウェブサイトへの掲載などの広告活動を、微力ながら行なっています。 以下に、スポンサー様との活動の一部を掲載しております。
      </Typography>
    </>
  )
}

const Session = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head} style={{textAlign: "center", paddingTop: 0}}>
            報告会
          </Typography>
          <Typography variant="body1" className={classes.body}>
            写真はスズキ株式会社様に、大会後の報告に伺ったときのものです。 
            ご希望されたスポンサー様に、大会後に１シーズンの統括報告に伺っております。 車両展示のために大会出場車両と共に伺うこともあります。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="suzuki.jpg" alt='sponsor'/>
        </Grid>
      </Grid>
    </>
  )
}

const Report = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head} style={{textAlign: "center", paddingTop: 0}}>
            企画書・報告書
          </Typography>
          <Typography variant="body1" className={classes.body}>
            シーズンの初めに車両開発の企画書をお送りしております。 また、月に一度の月例報告書、シーズンの終わりに統括報告書をお送りしております。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="report.jpg" alt='report'/>
        </Grid>
      </Grid>
    </>
  )
}

const Panel = () => {
  const classes = useStyle()

  return(
    <>
      <Grid container justify="center" alignItems="center" style={{paddingTop: 10, paddingBottom: 10}}>
        <Grid item xs={12} sm={8} alignItems="center">
          <Typography variant="h1" className={classes.head} style={{textAlign: "center", paddingTop: 0}}>
            スポンサーパネルへの掲載
          </Typography>
          <Typography variant="body1" className={classes.body}>
            車両展示の際に使用するスポンサーパネルに、企業・団体様のロゴを掲載させていただいております。
            写真は京都工芸繊維大学のオープンキャンパスにて、車両展示を行った際のものです。
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image filename="panel.jpg" alt='panel'/>
        </Grid>
      </Grid>
    </>
  )
}

const Sponsorship = () => {
  const classes = useStyle()

  return (
    <>
      <Layout>
        <SEO title="Grandelfino - SponsorShip"/>
        <NavBar/>
        <Container maxWidth="lg" style={{marginTop: 10}}>
          <Paper className={classes.paper}>
            <HeadText/>
            <Divider/>
            <Session/>
            <Divider/>
            <Report/>
            <Divider/>
            <Panel/>
          </Paper>
        </Container>
      </Layout>
    </>
  )
}

export default Sponsorship
