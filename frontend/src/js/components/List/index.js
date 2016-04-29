import React from 'react'
import { Button, Row, Col, FormGroup, Checkbox } from 'react-bootstrap'
import ListItem from '../ListItem'

export default (props) => {
  return (props.volunteers.length === 0)
    ? <h1> No volunteers found </h1>
    : (
    <ul style={ulStyle}>
      <li style={liStyle}>
        <Row>
          <Col sm={2}> Name </Col>
          <Col sm={2}> University </Col>
          <Col sm={2}> Subject </Col>
          <Col sm={1}> Location </Col>
          <Col sm={1}> DBS </Col>
          <Col sm={3}> Notes </Col>
          <Col sm={1}> Add </Col>
        </Row>
      </li>
      {props.volunteers.map((volunteer) => {
        return <ListItem changeChecked={props.changeChecked} volunteer={volunteer} />
      })}
    </ul>
  )
}

const ulStyle = {
  padding: '2em',
  borderRadius: '10px',
  color: '#154750',
  position: 'inherit',
  listStyleType: 'none'
}

const liStyle = {
  color: '#154750',
  fontSize: '1.1em',
  fontWeight: 'bold',
  marginTop: '5px'
}
