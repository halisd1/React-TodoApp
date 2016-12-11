import React from 'react';

import TodoList from 'TodoList';

var AddTodo = React.createClass({
  TodoList: function(todoActivity){
    todoActivity.preventDefault();

  if (TodoActivity.length > 0){
    TodoList.addTodoList(TodoList)
  };
  },

  render(){
    return(
      <div>
        <form className='todo-form' ref='form' onSubmit={this.TodoList}>
          <input type='text' ref='inputTodo' placeholder='What do you need to do?'></input>
          <button className='button expanded primary'>Add to List</button>
        </form>
      </div>
    )
  }
});

export default AddTodo;
