import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestPackage from 'react-addons-test-utils';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('it should exist', () =>{
    expect(AddTodo).toExist();
  });

  it('it should call onAddTodo prop with valid data', () => {
    var todoTextVariable='Check mail';
    var spy = expect.createSpy();
    var addTodo = TestPackage.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.inputTodo.value = todoTextVariable;
    TestPackage.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoTextVariable);
  });

  it('it should not call onAddTodo prop with invalid input', () => {
    var todoTextVariable='';
    var spy = expect.createSpy();
    var addTodo = TestPackage.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.inputTodo.value = todoTextVariable;
    TestPackage.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
