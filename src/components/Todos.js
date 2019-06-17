import React, { Component } from 'react'
import Todoitem from './Todoitem'
// import logo from './logo.svg';
import Proptypes from 'prop-types'

class Todos extends Component {
  render() {
    console.log(this.props.todos)
    //   return null
    const c = this.props.todos
    return c.map(todo => (
      <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
    ))
  }
}
//PROPTYPE
Todos.propTypes = {
  todos: Proptypes.array.isRequired,
}
export default Todos
