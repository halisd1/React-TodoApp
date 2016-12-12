import React from 'react';
import ReactDOM from 'react-dom';

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
