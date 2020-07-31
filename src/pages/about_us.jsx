import React, { useState }from 'react'
import clsx from 'clsx'
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Divider,
  CardActions,
  Collapse,
  Paper,
} from '@material-ui/core'

import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Image from '../components/Image'
import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'

const useStyle = makeStyles((theme) => ({
  title: {
    fontFamily: "Noto Sans JP",
    fontSize: "2rem",
    margin: theme.spacing(3),
  },
  body: {
    fontFamily: "Noto Sans JP",
    margin: theme.spacing(3)
  },
  cardTitle: {
    fontFamily: "Noto Sans JP",
    fontSize: "1.4rem",
  },
  cardBody: {
    fontFamily: "Noto Sans JP",
    fontSize: "1rem",
    marginBottom: theme.spacing(2),
  },
}));

const ActivityContent = () => {
  const classes = useStyle();

  return(
    <>
    </>
  )
}

const AboutUS = () => {
  const classes = useStyle()
  return(
    <>
      <Layout>
        <NavBar/>
        <Container maxWidth="md" style={{marginTop: 80, paddingLeft: 30, paddingRight: 30}}>
          <Paper elevation={3} style={{paddingLeft: 20, paddingRight: 20}}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h1" className={classes.title}>
                  Grandelfinoの発足
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Grandelfinoは2005年秋に自動車部のメンバーにより同志を募り、立ち上げられました。 
                  大学での活動をさせていただくために原動力付自転車のエンジンを使ったマシンを作るなど、 学内でのアピールを盛んに行い、
                  2006年度には京都工芸繊維大学の 「学生と教員の共同プロジェクト」の第一号に採用され、 
                  ここから全日本学生フォーミュラに参戦するための本格的な活動を開始しました。
                </Typography>
                <Divider/>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h1" className={classes.title}>
                  Grandelfinoについて
                </Typography>
              </Grid>
              <Grid item sm={8} xs={12}>
                <Typography variant="body1" className={classes.body}>
                  Grandelfino(グランデルフィーノ)は京都工芸繊維大学の学生フォーミュラ参戦プロジェクトチームです。 
                  設計製作はもちろん、部品調達やスポンサー様との渉外活動もすべて学生で行っています。 
                  自らフォーミュラカーを制作する過程で、モノづくりやチーム運営に重要なことを学べるよう、 日々活動しています。
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  Grandelfinoは2017年度に3度目の総合優勝を達成し、これからも総合優勝を目標として活動してまいります。 
                  また、海外大会に出場し、優勝することも最終的な目標の一つとしています。
                </Typography>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Image filename={"teamlogo.png"} />
              </Grid>
              <Grid item xs={12}>
              <Divider/>
                <Typography variant="h1" className={classes.title}>
                  活動内容
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" className={classes.body}>
                  Grandelfinoの活動は大きく分けて以下の4つに分類されます。
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h1" className={classes.title}>
                  設計・製作・改良
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="body1" className={classes.body}>
                  スポンサー様に支援していただいたCADソフトをやCAEソフトを使用して、車両の設計を行います。 
                  CADソフトを使うことで、製作を始める前に設計の不備を発見したり、強度計算を行ったりすることができます。
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  実際の製作では、大半のパーツを 京都工芸繊維大学ものづくり教育研究支援センターにて
                  工作機械をお借りし、自分たちで製作しています。 
                  また、学内で製作できない、一部のパーツに関してはスポンサー様に加工をお願いしております。
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Image filename={"Designing.png"} alt="design"/>
              </Grid>
              <Grid item xs={12}>
                <Divider/>
                <Typography variant="h1" className={classes.title}>
                  広報・渉外活動
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="body1" className={classes.body}>
                  フォーミュラカーを製作するには多くの材料や部品、設備、技術、知識が必要になります。
                  そのため、多くの企業や団体、そして個人の方々にGrandelfinoの活動をご理解いただき、 スポンサーとして支援していただいております。
                </Typography>
                <Typography variant="body1" className={classes.body}>
                支援していただいているスポンサー様には、月間活動報告書を送付し、
                車両へのステッカー貼付や ウェブサイトへの掲載など、微力ながら広告活動を行っております。
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  さらに、「東京モーターショー」や「フロムセブンミーティング」などで紹介の場をいただき、 
                  学生フォーミュラの活動を少しでも広げることができるよう活動しております。
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Image filename={"Extracurricular.jpg"} alt="design"/>
              </Grid>
              <Grid item xs={12}>
                <Divider/>
                <Typography variant="h1" className={classes.title}>
                  組織運営
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="body1" className={classes.body}>
                  多くのメンバー、いろいろな立場の人々が参加するこの活動は、 
                  チームをまとめて円滑に運営することは非常に難しいことです。 
                  それぞれのワークグループが自由に設計・製作をしても1台の車両となったとき、 
                  いろいろな不具合が出ることがよくあります。これらを未然に防ぐため、 
                  意思疎通による設計の共有やスケジュールの管理、モチベーションの維持などが必要になります。 
                  こういった、組織としての管理も重要な活動の一つです。
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Image filename={"Extracurricular.jpg"} alt="Extracurricular"/>
              </Grid>
              <Grid item xs={12}>
                <Divider/>
                <Typography variant="h1" className={classes.title}>
                  ドライバー育成
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="body1" className={classes.body}>
                良い車両を製作できたとしても、その性能を限界まで引き出せなければ、 学生フォーミュラ大会で良い成績を収めることは出来ません。 車両とドライバー、二つが伴ってこそ初めて良い成績が収めることが出来ます。 
                Grandelfinoでは、レーシングカートなどを用いてドライバーの育成も行なっています。
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Image filename={"Extracurricular.jpg"} alt="Extracurricular"/>
              </Grid> 
            </Grid>
          </Paper>
        </Container>
      </Layout>
    </>
  )
}

export default AboutUS;