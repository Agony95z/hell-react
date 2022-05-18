// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List'
class App extends React.Component {
  //初始化状态
	state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:false},
      {id:'004',name:'逛街',done:false}
    ]
  }
  addTodo = (data) => {
    const { todos } = this.state
    let newTodos = [data, ...todos]
    this.setState({todos: newTodos})
  }
  updateTodo = (id, done) => {
    const { todos } = this.state
    let newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, done}
      } else {
        return todo
      }
    })
    this.setState({todos: newTodos})
  }
  deleteTodo = (id) => {
    const { todos } = this.state
    let newTodos = todos.filter(todo => todo.id !== id)
    this.setState({todos: newTodos})
  }
  checkAllTodo = (done) => {
    const { todos } = this.state
    let newTodos = todos.map(todo => {
      return {...todo, done}
    })
    this.setState({todos: newTodos})
  }
  clearAllDone = () => {
    const { todos } = this.state
    let newTodos = todos.filter(todo => !todo.done)
    this.setState({todos: newTodos})
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}

export default App;
