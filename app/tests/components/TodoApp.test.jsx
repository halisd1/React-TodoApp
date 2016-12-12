import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestPackage from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('Todo App', () => {
  it('it should exist', () => {
      expect(TodoApp).toExist();
  });

  it('it should add todo to the todos state on handleAddTodo', () => {
    var dummytext = 'Some stupid task';
    var todoApp = TestPackage.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(dummytext);

    expect(todoApp.state.todos[0].text).toBe(dummytext);
  });
});
