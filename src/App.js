import React, { Component } from 'react'
import Todos from './components/Todos'
// import logo from './logo.svg';
import './App.css'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'lol',
        completed: false,
      },
      {
        id: 3,
        title: 'y54ht45',
        completed: false,
      },
    ],
  }
  markComplete = id => {
    console.log('cscs' + id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          console.log(id)
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    )
  }
}
export default App
