import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import {
  Card, 
  CardMedia, 
  makeStyles, 
  CardContent, 
  Typography, 
  Container, 
  Divider, 
  CardActions, 
  Button,
  Grid,
  Box,
  Paper,
} from '@material-ui/core'

import SEO from '../components/SEO'

import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'

const pageQuery = graphql`
  {
    gcms {
      members {
        id
        name
        role
        grade
        charge
      }
    }
  }
`

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  box: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      display: "inline"
    }
  },
  cardName: {
    display: "flex",
    alignItems: "center",
  },
  textName: {
    fontFamily: "Noto Sans JP",
    fontSize: "1.2rem",
    width: "120px"
  },
  cardGrade: {
    fontFamily: "Noto Sans JP",
    fontSize: "1rem",
  },
  cardCharge: {
    fontFamily: "Noto Sans JP",
    fontSize: "0.8rem",
  },
  roleTitle: {
    fontFamily: "Noto Sans JP",
    fontSize: "2rem",
    margin: theme.spacing(3)
  },
  roleSub: {
    fontFamily: "Noto Sans JP",
    marginBottom: theme.spacing(3)
  }
}))

const MemberItem = (props) => {
  const classes = props.classes
  const member = props.member
  return (
    <Grid item xs={12} sm={6} className={classes.root}>
      <Card style={{flexGrow: 1}} elevation={2} >
        <Box className={classes.box}>
          <CardContent className={classes.cardName}>
            <Typography className={classes.textName}>
              {member.name}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography className={classes.cardGrade}>
              {member.grade}
            </Typography>
            {member.charge.map(item => (
              <Typography className={classes.cardCharge}>
                <li>
                  {item}
                </li>
              </Typography>
            ))}
          </CardContent>
        </Box>
      </Card>
    </Grid>
  )
}

const MemberList = (props) => {
  const classes = useStyle()
  const members = props.members
  return(
    <>
      <Grid container spacing={1}>
        {members.map(({...member}) => (
          <MemberItem classes = {classes} member={member}/>
        ))}
      </Grid>
    </>
  )
}

const MemberPage = () => {
  const classes = useStyle()
  const {gcms: {members}} = useStaticQuery(pageQuery)

  const admin = members.filter(member=> member.role === "Admin")
  const powertrain = members.filter(member => member.role === "Powertrain")
  const chassis = members.filter(member => member.role === "Chassis")
  const fa = members.filter(member => member.role === "FA")

  return (
    <>
      <Layout>
        <SEO title="Grandelfino - Members"/>
        <NavBar/>
        <Container maxWidth="md" style={{marginTop: 10}}>
          <Paper elevation={3} style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
            <Typography variant="h1" className={classes.roleTitle}>
              メンバー紹介
            </Typography>
            <Typography variant="h5" className={classes.roleSub}>
              Grandelfinoのチームメンバーを紹介します。
            </Typography>
            <Typography variant="h2" className={classes.roleTitle}>
              幹部
            </Typography>
            <Typography variant="h5" className={classes.roleSub}>
              チームを取りまとめ、プロジェクトを円滑に進める役割を担います。
            </Typography>
            <MemberList members={admin}/>
            <Divider style={{marginTop: 10}}/>

            <Typography variant="h2" className={classes.roleTitle}>
              パワートレイン班
            </Typography>
            <Typography variant="h5" className={classes.roleSub}>
              パワートレイン班は、エンジンや駆動系などを担当するグループです。 
              「エンジンやそのエンジンパワーを伝え制御する部品」を担当しています。
            </Typography>
            <MemberList members={powertrain}/>
            <Divider style={{marginTop: 10}}/>

            <Typography variant="h2" className={classes.roleTitle}>
              シャシ・フレーム班
            </Typography>
            <Typography variant="h5" className={classes.roleSub}>
              シャシ・フレーム班は車両の骨組みのフレームや足回りのサスペンションなどを担当するグループです。 
                「自立するために必要な部品」を主に担当しています。
            </Typography>
            <MemberList members={chassis}/>
            <Divider style={{marginTop: 10}}/>

            <Typography variant="h2" className={classes.roleTitle}>
              指導教員(Faculty Advisor)
            </Typography>
            <Typography variant="h5" className={classes.roleSub}>
              技術・知識・渉外等、学生には至らない部分においてアドバイスをいただいたり、活動を行う上での正式な顧問として在籍していただいております。 
              FAの先生方以外にも、「学生と教員の共同プロジェクト」の協力教員や、ものづくり教育研究支援センターの職員の方々などにGrandelfinoの活動を支えていただいております。
            </Typography>
            <MemberList members={fa}/>
          </Paper>
        </Container>
      </Layout>
    </>
  )
}

export default MemberPage;