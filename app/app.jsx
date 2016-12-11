var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Load css
require('appStyles');

ReactDOM.render(
  <p>Boilerplate3 project</p>,
  document.getElementById('app')
);
