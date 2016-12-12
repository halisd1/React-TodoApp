import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'node-uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [
      {
        id: uuid(),
        text: 'Walk the dog'
      }, {
        id: uuid(),
        text: 'Clean the Yard'
      }, {
        id: uuid(),
        text: 'Do the laundry'
      }, {
        id: uuid(),
        text: 'Mow the lawn'
      }
    ]
    };
  },

  handleAddTodo: function(todoActivity){
    this.setState({
      todos: [
      ...this.state.todos,
      {
        id: uuid(),
        text: todoActivity
      }
    ]
    });
  },

  onSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },


  render(){
    var {todos} = this.state;

    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

export default TodoApp;
