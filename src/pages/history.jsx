import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { makeStyle } from '@material-ui/core/styles'
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
  makeStyles,
} from '@material-ui/core'

import Layout from '../templates/Layout'
import NavBar from '../templates/NavBar'

const pageQuery = graphql`
  {
    gcms {
      histories {
        accStatus
        acceleration
        autoclossStatus
        autocross
        award
        carName
        carNumber
        competition
        cost
        design
        efficiency
        endDate
        endurance
        enduranceStatus
        place
        skidpad
        skidpadStatus
        startdate
        teams
        title
        total
        presentation
      }
    }
  }
`

const useStyles = makeStyles((theme) => ({
  root: {

  },
  table: {
    minWidth: 750
  }
}))

const createRow = (event, status, scores) => {
  const score = scores.shift()
  const fullMark = scores.shift()
  const rank = scores.shift()
  return {event, status, score, fullMark, rank}
}

const RowTable = (props) => {
  const row = props.row
  console.log(Object.values(row))
  return(
    <>
      {Object.values(row).map((item) => (
        <TableCell>{item.event}</TableCell>
      ))}
    </>
  )
}

const CreateTable = (props) => {
  const classes = useStyles()

  const data = props.history
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
  const efficiency = data.efficiency
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
  console.log(staticRows[0])
  const sum = createRow("総合成績", "-", total)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="history table">
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
          <RowTable row={staticRows}/>
          <RowTable row={dynamicRows}/>
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
      <CreateTable history={history}/>
    ))
  )
}

const HistoryPage = () => {
  return(
    <Layout>
      {/* <NavBar/> */}
      <HistoryTable/>
    </Layout>
  )
}

export default HistoryPage