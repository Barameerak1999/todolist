import React, { Component } from 'react'
import Proptypes from 'prop-types'
export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through ' : 'none',
      //else represented as colon
    }
  }

  render() {
    const { id, title } = this.props.todo
    // const a = this.props.todo.title
    console.log(this.props.todo)

    console.log('ddddd' + this.props.markComplete)
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'  '}
          {title}
        </p>
      </div>
    )
  }
}
//PROPTYPE
//the name of the class
Todoitem.propTypes = {
  todos: Proptypes.object.isRequired,
}

const itemStyle = {
  backgroundColor: '#f4f4f4',
}
export default Todoitem
