import React from 'react'

export default class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <h1>hello {this.props.name}</h1>
      </div>
    )
  }
}
