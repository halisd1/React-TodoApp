import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestPackage from 'react-addons-test-utils';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
  it('it should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('it should call onSearch with entered input text', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var todoSearch = TestPackage.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestPackage.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'Dog');
  });

  it('it should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var todoSearch = TestPackage.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestPackage.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
