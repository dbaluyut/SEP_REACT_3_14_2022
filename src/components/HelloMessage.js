import React from 'react'
import './style.scss'
export default class HelloMessage extends React.Component {
  render() {
    return (
      <div class='HelloMessage'>
        <h1>hello {this.props.name}</h1>
      </div>
    )
  }
}
