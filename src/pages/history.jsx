import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Container,
  Box,
  Typography,
  Divider,
} from '@material-ui/core'

import SEO from '../components/SEO'

import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1)
  },
  table: {
    minWidth: 750,
  },
  award: {
    minWidth: '100%'
  },
  title: {
    fontFamily: "Noto Sans JP",
    margin: theme.spacing(2),
    fontSize: "2rem"
  },
  subTitle: {
    fontFamily: "Noto Sans JP",
    margin: theme.spacing(2),
  },
  body: {
    fontFamily: "Noto Sans JP"
  }
}))

const createRow = (event, status, scores) => {
  const score = scores[0]
  const fullMark = scores[1]
  const rank = scores[2] || '-'
  return {event, status, score, fullMark, rank}
}

const RowTable = (props) => {
  const row = props.row
  return (
    Object.values(row).map((item) => (
      <TableRow key={item.event}>
        {(item.event === "コスト") && (
          <TableCell rowSpan={3}>静的審査</TableCell>
        )}
        {(item.event === "アクセラレーション") && (
          <TableCell rowSpan={5}>動的審査</TableCell>
        )}
        <TableCell align="center">{item.event}</TableCell>
        <TableCell align="center">{item.status}</TableCell>
        <TableCell align="right">{item.score}({item.fullMark})</TableCell>
        <TableCell align="right">{item.rank}</TableCell>
      </TableRow>
    ))
  )
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const AwardTable = (props) => {
  const classes = useStyles()
  const data = props.award
  let award_items = 
    <StyledTableRow>
      <StyledTableCell align="center"> 
        None
      </StyledTableCell>
    </StyledTableRow>
  
  if (data.length > 0) {
  award_items = 
    Object.values(data).map((item) => (
      <StyledTableRow>
        <StyledTableCell align="center">
          {item}
        </StyledTableCell>
      </StyledTableRow>
  ))
    }

  return(
    <TableContainer component={Paper} className={classes.root} variant="outlined">
      <Table className={classes.award} aria-label="award table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" style={{fontSize: "1.1rem"}}>
              受賞一覧
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {award_items}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const CreateTable = (props) => {
  const classes = useStyles()

  const data = props.history
  const award = data.award || '-'
  const cost = data.cost
  const presentation = data.presentation
  const design = data.design
  const acc = data.acceleration
  const accStatus = data.accStatus
  const skidpad = data.skidpad
  const skidpadStatus = data.skidpadStatus
  const autocross = data.autocross
  const autocrossStatus = data.autoclossStatus
  const endurance = data.endurance
  const enduranceStatus = data.enduranceStatus
  const efficiency = data.efficiency || '-'
  const total = data.total

  const staticRows = [
    createRow("コスト", "-", cost),
    createRow("プレゼンテーション", "-", presentation),
    createRow("デザイン", "-", design),
  ]
  const dynamicRows = [
    createRow("アクセラレーション", accStatus, acc),
    createRow("スキッドパッド", skidpadStatus, skidpad),
    createRow("オートクロス", autocrossStatus, autocross),
    createRow("エンデュランス", enduranceStatus, endurance),
    createRow("燃費", "-", efficiency),
  ]
  const sum = createRow("総合成績", "-", total)
  return (
    <TableContainer component={Paper} className={classes.root} variant="outlined">
      <Table className={classes.table} size="large" aria-label="history table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              競技種目
            </TableCell>
            <TableCell align="center">
              内容
            </TableCell>
            <TableCell align="center">
              得点(満点)
            </TableCell>
            <TableCell align="center">
              順位
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <RowTable row={staticRows} />
          <RowTable row={dynamicRows} />
          <TableCell colSpan={3} align="center">総合成績</TableCell>
          <TableCell align="right">{sum.score}({sum.fullMark})</TableCell>
          <TableCell align="right">{sum.rank}</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const HistoryTable = (props) => {
  const classes = useStyles()
  const {gcms: {histories}} = useStaticQuery(pageQuery)
  return (
    histories.map(({...history}) => (
      <>
      <div id={history.id}>
        <Typography variant="h1" className={classes.title}>{history.title}</Typography>
        <Typography variant="h2" className={classes.subTitle}>{history.competition}</Typography>
        <Typography variant="body1" className={classes.body}>
          <ul>
            <li>
              開催日: {history.startdate} ～ {history.endDate}
            </li>
            <li>
              開催地: {history.place}
            </li>
            <li>
              出場チーム数: {history.teams}
            </li>
            <li>
              大会車両番号: {history.carNum}
            </li>
            <li>
              参加車両: {history.carName}
            </li>
          </ul>
        </Typography>
        <CreateTable history={history}/>
        <Divider/>
        <AwardTable award={history.award}/>
      </div>
      </>
    ))
  )
}

const HistoryPage = () => {
  return(
    <Layout>
      <SEO title="Grandelfino - Histories"/>
      <NavBar/>
      <Container maxWidth='lg' style={{paddingTop: 10}}>
        <Paper style={{paddingLeft: 20, paddingRight: 20, paddingTop: 1}} elevation={3}>
          <HistoryTable/>
        </Paper>
      </Container>
    </Layout>
  )
}

export default HistoryPage

const pageQuery = graphql`
  {
    gcms {
      histories(orderBy: title_DESC) {
        id
        accStatus
        acceleration
        autoclossStatus
        autocross
        award
        carName
        carNum
        competition
        cost
        design
        efficiency
        endDate
        endurance
        enduranceStatus
        place
        presentation
        skidpad
        skidpadStatus
        startdate
        teams
        title
        total
      }
    }
  }
`