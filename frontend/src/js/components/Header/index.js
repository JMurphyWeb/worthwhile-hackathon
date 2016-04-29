import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

const styles = {
  img: {
    height: '100%',
    width: '70px'
  }
}

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = { menuOpen: false }
  }

  render () {
    return (
      <Navbar
        expanded={this.state.menuOpen}
        onToggle={() => { this.setState({ menuOpen: !this.state.menuOpen }) }}
        className='top-menu'
        fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>
              <img  style={styles.img} src={this.props.logoUrl}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse pullRight>
          <Nav pullRight>

                <li onClick={() => { this.setState({ menuOpen: false }) }}
                    role='presentation'
                    key={0 + '-li'}>
                  <Link key={0} to={'/'}>Home</Link>
                </li>
                <li onClick={() => { this.setState({ menuOpen: false }) }}
                    role='presentation'
                    key={1 + '-li'}>
                  <Link key={1} to={'/form'}>New Volunteer</Link>
                </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
