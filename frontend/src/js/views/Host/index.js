import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

import Filters from '../../components/Filters/index.js'

const ulStyle = {
  backgroundColor: '#0075B2',
  padding: '2em',
  borderRadius: '10px'
}

const loggedInRoleID = '2'

export default class HostView extends Component {
  constructor () {
    super()
    this.state = {
      volunteers: [],
      subject: '',
      university: '',
      location: '',
      subjectGroup: ''
    }
    this.changeState = this.changeState.bind(this)
  }


  changeState (newState) {
    this.setState(Object.assign(this.state, newState))
    console.log(this.state);
  }

  componentDidMount () {
    let xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.onreadystatechange = () => {
      console.log(xhr.status, xhr.readyState)
      if (xhr.status === 200 && xhr.readyState === 4) {
        console.log('response', JSON.parse(xhr.responseText))
        // this.setState({candidates: JSON.parse(xhr.responseText)})
      }
    }
    xhr.open('GET', '/getAllVolunteers')
    xhr.send()
  }

  // getState () {
  //   return this.state
  // }
  render () {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Filters changeState={this.changeState}/>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <h1>Generate emails Component</h1>
          </Col>
          <Col md={10}>
            <div>
              <h1>filtered list of volunteers</h1>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}
