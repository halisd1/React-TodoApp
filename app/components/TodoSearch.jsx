import React from 'react';

var TodoSearch = React.createClass({
  onChangeEvent: function(){
    var showCompleted = this.refs.showCompleted.checked;
    var TodoEvent = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },

  render(){
    return(
        <div>
          <div>
            <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.onChangeEvent}/>
          </div>
          <div>
            <label>
              <input type="checkbox" ref="showCompleted" onChange={this.onChangeEvent}/>
              Show completed todos
            </label>
          </div>
        </div>
    )
  }
});

export default TodoSearch;
