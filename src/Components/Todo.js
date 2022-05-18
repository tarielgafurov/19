import React from 'react';
import List from './List';
import './Todo.css'

class Todo extends React.Component {
    
  constructor(){
    super()

    this.state = {
      value : '',
      items:[],
    }
  }

  handlerChange(event){
    this.setState({
      value: event.target.value
    })
  }


  onDeleteHandler = index => {
    const deleteTask = [...this.state.items]
    deleteTask.splice(index,1)
    this.setState({
        items:deleteTask
    })
  }

  onFromHandler = (e) => {
    e.preventDefault()
    this.setState({
      value: '',
      items : [...this.state.items, this.state.value],
    })
  }

  
  render(){
    return (
      <div className='container'>
        <h3>TODO LIST</h3>
        <input value={this.state.value} type="text" onChange={(e) => this.handlerChange(e)}/>
        <button onClick={this.onFromHandler}>ADD</button>
        <List deleteTask={this.onDeleteHandler} items={this.state.items}/>
      </div>
    
    )
  }
}

export default Todo;