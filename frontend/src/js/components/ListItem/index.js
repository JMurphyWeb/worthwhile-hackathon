import React from 'react'
import { Button, Row, Col, FormGroup, Checkbox } from 'react-bootstrap'

export default (props) => {
  const volunteer = props.volunteer
  return (
    <li style={props.liStyle} key={volunteer.index}>
      <Row>
        <Col sm={2}> {volunteer.firstName} {volunteer.surname}</Col>
        <Col sm={2}> {volunteer.university} </Col>
        <Col sm={2}> {volunteer.subject} </Col>
        <Col sm={1}> {volunteer.location} </Col>
        <Col sm={1}> {volunteer.dbsStatus} </Col>
        <Col sm={3}> {volunteer.notes} </Col>
        <Col sm={1}>
          <FormGroup>
            <Checkbox
              inline
              onChange={ (e) => {
                props.changeChecked(volunteer.index, e.target.checked)
              }}
              >
            </Checkbox>
          </FormGroup>
        </Col>
      </Row>
    </li>
  )
}
