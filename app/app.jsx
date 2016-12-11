var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

// Load Components
import TodoApp from 'TodoApp';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Load css
require('appStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
