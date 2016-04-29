import React from 'react'
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

export default class Filters extends React.Component {

  render () {
    return (
      <div>
        <Form >
          <FormGroup controlId="filterSubject">
            <ControlLabel>Subject</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="enter a subject"
              value={this.props.values.subject}
              onChange={(e) => {this.props.changeState({subject: e.target.value.toLowerCase()})}}
              />
          </FormGroup>

          {' '}
          <FormGroup controlId="filterUniversity">
            <ControlLabel>
              University
            </ControlLabel>
            <FormControl
              type="text"
              placeholder="enter a subject"
              value={this.props.values.university}
              onChange={(e) => {this.props.changeState({university: e.target.value})}}
              />
          </FormGroup>

          <FormGroup controlId="filterSubjectGroup">
            <ControlLabel>
              Subject Group
            </ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select subject Group"
              value={this.props.values.subjectGroup}
              onChange={(e) => {this.props.changeState({subjectGroup: e.target.value})}}
              >
              <option value=''>Subject Group</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId="filterLocation">
            <ControlLabel>Location</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="school location"
              value={this.props.values.location}
              onChange={(e) => {this.props.changeState({location: e.target.value.toLowerCase()})}}              
              />
          </FormGroup>

          {' '}

        </Form>
      </div>
    )
  }
}
