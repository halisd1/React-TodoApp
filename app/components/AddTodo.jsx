import React from 'react';

import TodoList from 'TodoList';
import TodoApp from 'TodoApp';

var AddTodo = React.createClass({
  onSubmitCollect: function(e){
  e.preventDefault();

  var todos = this.refs.inputTodo.value;

  if (todos.length > 0){
    this.refs.inputTodo.value = '';
    this.props.onAddTodo(todos);
  } else {
    this.refs.inputTodo.focus();
  };
  },

  render(){
    return(
      <div>
        <form className='todo-form' onSubmit={this.onSubmitCollect}>
          <input type='text' ref='inputTodo' placeholder='What do you need to do?'></input>
          <button className='button expanded primary'>Add to List</button>
        </form>
      </div>
    )
  }
});

export default AddTodo;
