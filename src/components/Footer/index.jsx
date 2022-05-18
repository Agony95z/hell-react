import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Footer extends Component {
  static propTypes = {
    checkAllTodo: PropTypes.func.isRequired,
    clearAllDone: PropTypes.func.isRequired
  }
  handleAllCheck = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  // 清除已完成
  handleClaerhasDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((acc, item) => {
      return acc + (item.done ? 1 : 0)
    }, 0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleAllCheck} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClaerhasDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
