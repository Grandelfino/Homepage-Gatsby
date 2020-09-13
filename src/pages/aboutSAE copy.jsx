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
import BackgroundImage from 'gatsby-background-image'

import Image from '../components/Image'


import SEO from '../components/SEO'
import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'


export const useStyle = makeStyles((theme) =>({
  root: {
  },
  topImage: {
    textAlign: "center",
  },
  topText: {
    fontFamily: "Noto Sans JP",
    color: "white",
    paddingTop: theme.spacing(30),
    paddingBottom: theme.spacing(1),
    fontSize: "3rem",
    [theme.breakpoints.down("sm")] :{
      paddingTop: theme.spacing(20),
      fontSize: "2rem",
    },
  },
  subText: {
    fontFamily: "Noto Sans JP",
    color: "white",
    fontSize: "1rem",
    paddingBottom: theme.spacing(3)
  },
  cardRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')] :{
      flexDirection: "column",
      alignItems: 'center'
    },
  },
  cardMedia: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
    objectFit: 'cover'
  }
}))

const Top = () => {
  const classes = useStyle()
  return(
    <>
      <BackgroundSection>
        <Box className={classes.topImage}>
          <Typography className={classes.topText}>
            Forumla SAE
          </Typography>
          <Container maxWidth="md" style={{paddingBottom: "100px", textAlign:"left"}}>
            <Typography variant="body1" className={classes.subText}>
              Formula SAEとは、教室の中だけでは優秀なエンジニアが育たないことにいち早く気づいたアメリカ合衆国において、
              『ものづくりによる実践的な学生教育プログラム』として、自動車技術者協会 (Society of Automotive Engineers)の主催により、
              1982年より開催されている、自動車競技会です。 その目的は、フォーミュラカーの設計・製作を通して、 学生に仮想企業を運営させ、
              実践的な知識を身に付けさせることにあります。
            </Typography>
            <Typography variant="body1" className={classes.subText}>
              現在、アメリカでは140校を超える大学チームが国内外からも参加する国際的な大会になっています。 
              また、1998年にはイギリスで、2000年にはオーストラリアで、さらにはドイツ、イタリア、ブラジルで 同様のルールによる競技が開催されています。
            </Typography>
          </Container>
        </Box>
      </BackgroundSection>
    </>
  )
}

const FSAECard = () => {
  const classes = useStyle()
  return (
    <>
      <Card className={classes.cardRoot} elevation={3}>
        <CardMedia
          className={classes.cardMedia}
          // component='img'
          height='100%'
        >
          <Image filename='JFSAE_logo.png'/>
        </CardMedia>
        <CardContent>
          <Typography variant='h1' style={{textAlign: 'center', padding: '20px'}}>
            全日本学生フォーミュラ
          </Typography>
          <Typography variant='body1' style={{textAlign: 'left', padding: '20px'}}>
            全日本学生フォーミュラ大会はFormula SAEの日本版として、同様の理念の下、社団法人自動車技術会の主催で、
            2003年より開催されています。大会ルールはFormula SAEと同一のものに 日本大会独自ルールを加えたものが適用されています。
          </Typography>
          <Typography variant='body1' style={{textAlign: 'left', padding: '20px'}}>
            2003年、第1回大会が富士スピードウェイにおいて開催された時の参加チームは17チームであった日本大会も 2006年の第4回大会では世界の優勝校を招いて世界大会が開催されました。 
            2017年の第15回大会では93チームもの大学チームが国内外より参加する規模の大きな大会となり、 全日本学生フォーミュラ大会はFormula SAEのアジア大会というべきものにまで発展しています。
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

const Event = () => {
  const classes = useStyle()
  return (
    <Paper style={{marginTop: '10px', padding: '10px'}} elevation={3}>
      <Typography variant='h1' style={{textAlign: 'center'}}>
        競技種目
      </Typography>
      <Typography variant='body1' style={{padding: '30px', textAlign:'center'}}>
        学生フォーミュラの競技種目は大きく２つに分類されます。 
        １つは実際にマシンを販売すると仮定した時の費用や販売戦略などを評価する静的審査、 もう１つは実際にマシンの走行性能を評価する動的審査です。
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs='12' sm='6' align='center'>
          <Card variant='outlined'>
            <CardActionArea
              component={Link}
              to='/static'
              >
              <CardMedia
                style={{width: '100%', objectFit: 'fill'}}
              >
                <Image filename='JFSAE_logo.png'/>
              </CardMedia>
              <Divider/>
              <CardContent>
                <Typography variant='h3'>
                  Static Events
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs='12' sm='6' align='center'>
          <Card variant='outlined'>
            <CardActionArea
              component={Link}
              to='/dynamic'
              >
              <CardMedia
                style={{ width: '100%', alignItems: 'center', justifyContent: 'center'}}
              >
                <Image filename='JFSAE_logo.png'/>
              </CardMedia>
              <Divider/>
              <CardContent>
                <Typography variant='h3' style={{textAlign: 'center'}}>
                  Dynamic Events
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  )
}

const AboutSAE = () => {
  return(
    <Layout>
      <SEO title="Grandelfino - About FSAE"/>
      <NavBar/>
      <Top/>
      <Container maxWidth='lg'>
        <FSAECard/>
        <Event/>
      </Container>
    </Layout>
  )
}

const BackgroundSection = (props) => (
  <StaticQuery
    query={query}
    render={data => {
      const imageData = data.sae.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          >
            {props.children}
          </BackgroundImage>
      )
    }}
  />
)

const query=graphql`
  query {
    sae: file(relativePath: {eq: "sae/14th_photo.jpg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`



export default AboutSAE