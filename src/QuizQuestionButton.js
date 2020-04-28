import React, { Component } from 'react'

class QuizQuestionButton extends Component {

  render() {
    return (
      <li>
        <button
          onClick={() => { this.props.clickHandler(this.props.button_text) }}
        >
          {this.props.button_text}
        </button>
      </li>
    )
  }
}

export default QuizQuestionButton