/** @jsx React.DOM */

'use strict'

var ReactDOM = require('react-dom');
var Hello = require('./Hello');

ReactDOM.render(<Hello data={data}/>, document.getElementById('app'));
