import React, { Component } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import List from '../../components/List'
import Filters from '../../components/Filters/index.js'
import Emails from '../../components/Emails'


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
    this.changeChecked = this.changeChecked.bind(this)
    this.uncheckAll = this.uncheckAll.bind(this)
  }

  uncheckAll () {
    const newVols = this.state.volunteers.map(vol => {
      return (vol.checked)
        ? Object.assign({}, vol, {checked: false})
        : vol
    })

    this.setState({ volunteers: newVols })
  }

  changeChecked (i, bool) {
    const newVols = [
      ...this.state.volunteers.slice(0,i),
      Object.assign({}, this.state.volunteers[i], {checked: bool}),
      ...this.state.volunteers.slice(i + 1)
    ]
    this.setState({ volunteers: newVols })
  }

  changeState (newState) {
    this.setState(newState)
    console.log(this.state)
  }

  componentDidMount () {
    let xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const volunteers = JSON.parse(xhr.responseText).map((volunteer, i) => {
          return {
            ...volunteer,
            index: i,
            checked: false
          }
        })
        this.setState({volunteers})
      }
    }
    xhr.open('GET', '/getAllVolunteers')
    xhr.send()
  }

  render () {
    const filteredList = this.state.volunteers.filter((x) => {
      return (this.state.university.length > 0)
        ? x.university === this.state.university
        : true
    }).filter( x => {
      return (this.state.subjectGroup.length > 0)
        ? x.subjectGroup === this.state.subjectGroup
        : true
    }).filter( x => {
      return x.subject.toLowerCase().indexOf(this.state.subject) > -1
    })
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
              <Filters changeState={this.changeState}/>
            </Col>
          </Row>
          <Row>
          <Col md={12}>
          <Emails volunteers={this.state.volunteers} uncheckAll={this.uncheckAll} changeState={this.changeState}/>
          </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div>
                <List changeChecked={this.changeChecked} volunteers={filteredList} />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const ulStyle = {
  backgroundColor: '#0075B2',
  padding: '2em',
  borderRadius: '10px'
}
