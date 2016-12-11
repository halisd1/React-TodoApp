import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestPackage from 'react-addons-test-utils';

import TodoList from 'TodoList';

describe('Todo List', () => {
  it('it should exist', () => {
      expect(TodoList).toExist();
  });
});
