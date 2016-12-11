import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos: [
      {
        id: 1,
        text: 'Walk the dog'
      }, {
        id: 2,
        text: 'Clean the Yard'
      }, {
        id: 3,
        text: 'Do the laundry'
      }, {
        id: 4,
        text: 'Mow the lawn'
      }
    ]
    };
  },

  handleAddTodo: function(todoActivity){
    alert('new todo: ' + todoActivity);
  },

  render(){
    var {todos} = this.state;

    return(
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

export default TodoApp;
