import React from 'react';

var Todo = React.createClass({

  render(){
    var {id, text} = this.props.todo;

    return(
      <div>
        {id}. {text}
      </div>
    )
  }
});

export default Todo;
