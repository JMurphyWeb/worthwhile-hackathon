import React from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import axios from 'axios'

export default class VolunteerForm extends React.Component {

  constructor () {
    super()
    this.state = {
      firstName: '',
      surname: '',
      phoneNumber: '',
      emailAddress: '',
      subjectGroup: '',
      subject: '',
      university: '',
      location: '',
      dbsStatus: '',
      starRating: '',
      notes: ''
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm () {
    axios.post('/newVolunteer', this.state)
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <Form >
          <FormGroup controlId="selectName">
            <ControlLabel>First name</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="First name"
              onChange={(e) => {this.setState({firstName: e.target.value})}}
              />
          </FormGroup>
          <FormGroup controlId="selectSurname">
            <ControlLabel>Surname</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Surname"
              onChange={(e) => {this.setState({surname: e.target.value})}}
              />
          </FormGroup>
          <FormGroup controlId="selectPhone">
            <ControlLabel>Phone number</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Surname"
              onChange={(e) => {this.setState({phoneNumber: e.target.value})}}
              />
          </FormGroup>
          <FormGroup controlId="selectEmail">
            <ControlLabel>Email Address</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Surname"
              onChange={(e) => {this.setState({emailAddress: e.target.value})}}
              />
          </FormGroup>
          <FormGroup controlId="selectSubject">
            <ControlLabel>Subject</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="enter a subject"
              onChange={(e) => {this.setState({subject: e.target.value})}}
              />
          </FormGroup>
          <FormGroup controlId="selectSubjectGroup">
            <ControlLabel>
              Subject Group
            </ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select subject Group"
              onChange={(e) => {this.setState({subjectGroup: e.target.value})}}
              >
              <option value=''>Subject Group</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </FormControl>
          </FormGroup>

          {' '}
          <FormGroup controlId="selectUniversity">
            <ControlLabel>
              University
            </ControlLabel>
            <FormControl
              type="text"
              placeholder="University"
              onChange={(e) => {this.setState({university: e.target.value})}}
              />
          </FormGroup>

          <FormGroup controlId="selectLocation">
            <ControlLabel>Location</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Volunteer's location"
              onChange={(e) => {this.setState({location: e.target.value.toLowerCase()})}}              
              />
          </FormGroup>

          <FormGroup controlId="selectDBS">
            <ControlLabel>
              DBS Status
            </ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select DBS status"
              onChange={(e) => {this.setState({dbsStatus: e.target.value})}}
              >
              <option value=''>DBS Status</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="selectStarRating">
            <ControlLabel>Star Rating</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Stars"
              onChange={(e) => {this.setState({starRating: e.target.value})}}
              />
          </FormGroup>

          <FormGroup controlId="selectNotes">
            <ControlLabel>Notes</ControlLabel>
            {' '}
            <FormControl
              type="text"
              placeholder="Notes"
              onChange={(e) => {this.setState({notes: e.target.value})}}
              />
          </FormGroup>

          

          <Button onClick={this.submitForm}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
