import React from 'react';
import ReactDOM from 'react-dom';
import Todo from 'Todo';

var TodoList = React.createClass({


  /*
    addTodoList: function(TodoList, TodoActivity){
      var TodoItem = {
        id: TodoList.length + 1,
        text: TodoActivity
      };
      this.state.todos.push(TodoItem);
    },
  */

  render(){
    var {todos} = this.props;
    var renderTodos = () =>{
      return todos.map((todo) =>{
        return (
          <Todo key={todo.id} todo={todo}/>
        );
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default TodoList;
