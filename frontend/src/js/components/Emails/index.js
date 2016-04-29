import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default class Emails extends React.Component {
  constructor () {
    super()
    this.state = { showModal: false }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }
  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
  }

  render() {
    var emails = []
    this.props.volunteers.forEach((vol) => {
      (vol.checked)
      ? emails.push(vol.emailAddress)
      : null
    })
    emails = emails.join(', ')

    return (
      <div>
        <Button
          onClick={this.open}
        >
          View Emails
        </Button>

        <Button
          onClick={() => copyToClipboard(emails)}
          >
          Copy Emails To Clipboard
        </Button>

        {/* Doesnt reset checked boxes nor clear filter values on page */}
        <Button
          onClick={() => {
            this.props.changeState({
              subject: '',
              university: '',
              location: '',
              subjectGroup: ''
            })
            this.props.uncheckAll()
          }}
          >
          Clear Filters and Emails
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Emails</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p ref>{emails}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

function copyToClipboard(emails) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_"
    var isInput = false
    var origSelectionStart, origSelectionEnd

    var target = document.createElement("textarea")
    target.style.position = "absolute"
    target.style.left = "-9999px"
    target.style.top = "0"
    target.id = targetId
    document.body.appendChild(target)

    target.textContent = emails

    // select the content
    var currentFocus = document.activeElement
    target.focus()
    target.setSelectionRange(0, target.value.length)

    // copy the selection
    var succeed
    try {
    	  succeed = document.execCommand("copy")
    } catch(e) {
        succeed = false
    }
    return succeed
}
