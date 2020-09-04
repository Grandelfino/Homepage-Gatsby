import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container, 
  Paper, 
  Typography, 
  Grid,
  } from '@material-ui/core'

import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'
import SEO from '../components/SEO'

export const useStyle = makeStyles((theme) => ({
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
    textAlign: 'left',
    fontFamily: 'Noto Sans JP',
    fontSize: '1.5rem',
    margin: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    },
  },
  paper: {
    padding: theme.spacing(3)
  }
}));

const Map = () => (
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.3039671344877!2d135.77719551609005!3d35.04913877198269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001083a678e4a47%3A0x3d8dffcd82f43cff!2z5a2m55Sf44OV44Kp44O844Of44Ol44Op44OX44Ot44K444Kn44Kv44OIIEdyYW5kZWxmaW5v!5e0!3m2!1sja!2sjp!4v1598674826625!5m2!1sja!2sjp" 
width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
)
const Contact = () => {
  const classes = useStyle()

  return(
    <>
      <Layout>
        <SEO title="Grandelfino - Contact us"/>
        <NavBar/>
        <Container maxWidth="lg">
          <Paper className={classes.paper}>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} align="left">
                <Typography variant="h1" className={classes.head}>
                  活動場所
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Grandelfinoは主に京都工芸繊維大学内の学習支援施設で活動しております。 学習支援施設１階の101,102号室で活動しておりますので、見学など御用の方はノックしてください。
                </Typography>
              </Grid>
              <Grid item xs={12} align="center">
                <Map/>
              </Grid>
            </Grid>
            <Typography variant="h1" className={classes.head}>
              お問い合わせ
            </Typography>
            <Typography>
              Grandelfinoの活動やウェブサイトに対してのお問い合わせ、ご意見、ご指摘などは下記の内容をご了承の上、
              <a href={"mailto:" + "grandelfino@kit.ac.jp"}>grandelfino@kit.ac.jp</a>までお寄せください。
            </Typography>
            <Typography variant="h2" className={classes.title}>
              ご注意事項
            </Typography>
            <Typography variant="body1" className={classes.body}>
              <ul>
                <li>皆様からのお問い合わせをいただいた際に我々が取得した個人情報は、皆様へのご連絡・ご回答をさせていただく以外の目的には使用いたしません。</li>
                <li>送信されるメールの内容が 我々に関わりのない営利目的や悪戯を含んだメールの場合、受信することをお断りいたします。</li>
                <li>ご連絡・ご回答につきまして、原則的にチームメールアドレス<a href={"mailto:" + "grandelfino@kit.ac.jp"}>grandelfino@kit.ac.jp</a>での返信とさせていただきますが、お問い合せの内容により、電話や担当者個人のメールアドレスなどの方法で ご連絡させていただく場合がございますのでご了承ください。</li>
                <li>お問い合わせ内容の確認などを行う場合、回答に時間がかかることがございます。また、いただいたお問い合せに対して、回答を差し上げられない場合がございますのでご了承ください。</li>
              </ul>
            </Typography>
            </Paper>
        </Container>
      </Layout>
    </>
  )
}

export default Contact