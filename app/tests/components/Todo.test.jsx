import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestPackage from 'react-addons-test-utils';

import Todo from 'Todo';
import TodoList from 'TodoList';

describe('Todo', () => {
  it('it should exist', () => {
      expect(Todo).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
      id: 1,
      text: 'do something'
    }, {
      id: 2,
      text: 'do something else'
    }
  ]
    var todoList = TestPackage.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestPackage.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);

  });
});
