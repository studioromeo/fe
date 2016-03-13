/** @jsx React.DOM */

'use strict'

var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            expanded: false
        };
    },

    onClick: function() {
        this.props.onClick(this.props.node.id);
    },

    onExpand: function() {
        var expanded = this.state.expanded;

        this.setState({
            expanded: !expanded
        });
    },

    render: function() {
        var node = this.props.node;
        var text = this.props.selected ? 'Deselect' : 'Select';
        var expand = this.state.expanded ? 'Expanded' : 'Collapsed';

        return (
            <div>
                <button onClick={this.onExpand}>{expand}</button>
                {node.name}
                <button onClick={this.onClick}>{text}</button>
            </div>
        );
    }
});
