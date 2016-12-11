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
});
