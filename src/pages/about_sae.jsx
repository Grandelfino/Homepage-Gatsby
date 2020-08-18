import React from 'react'
import { graphql, useStaticQuery, Link, StaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Container, 
  Paper, 
  Typography, 
  Box,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Grid,
  } from '@material-ui/core'
import BackgroundImage from 'gatsby-background-image'

import Image from '../components/Image'

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
  cardMedia: {
    width: 1000,
  }
}))

const Top = () => {
  const classes = useStyle()
  return(
    <>
      <div style={{marginTop: 50}}>
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
      </div>
    </>
  )
}

const FSAECard = () => {
  const classes = useStyle()
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card elevation={1} style={{maxHeight: 300, display: "flex"}}>
            <CardMedia 
              className={classes.cardMedia}
              height="140"
              >
              <Image filename="JFSAE_logo.png"/>
            </CardMedia>
            <CardContent>
              <Typography>
                全日本学生フォーミュラ大会はFormula SAEの日本版として、同様の理念の下、社団法人自動車技術会の主催で、 
                2003年より開催されています。大会ルールはFormula SAEと同一のものに 日本大会独自ルールを加えたものが適用されています。
                2003年、第1回大会が富士スピードウェイにおいて開催された時の参加チームは17チームであった日本大会も
                2006年の第4回大会では世界の優勝校を招いて世界大会が開催されました。 2017年の第15回大会では93チームもの大学チームが国内外より参加する規模の大きな大会となり、 
                全日本学生フォーミュラ大会はFormula SAEのアジア大会というべきものにまで発展しています。
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

const AboutSAE = () => {
  return(
    <Layout>
      <NavBar/>
      <Top/>
      <FSAECard/>
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