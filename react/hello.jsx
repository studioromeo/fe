/** @jsx React.DOM */

'use strict'

var React = require('react');
var Node = require('./node');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            selected: null
        };
    },
    onClick: function(key) {
        this.setState({
            selected: key
        });
    },

    buildTree: function(node) {
        return (<Node
            key={node.id}
            node={node}
            selected={this.state.selected === node.id}
            onClick={this.onClick}
        />);
    },

    render: function() {
        var treeNodes = this.props.data.map(this.buildTree);

        return <div>{treeNodes}</div>
    }
})
