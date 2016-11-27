/** @jsx React.DOM */
// rcc
// var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('./actions/actions.js');
var AppStore = require('./stores/store.js');
var ComponentBody = require('./components/MainComponent.jsx');

var React = require('react');
var PropTypes = React.PropTypes;

var App = React.createClass({

    render: function() {
        return (
            <div>
                <ComponentBody/>
            </div>
        );
    }

});

module.exports = App;

ReactDOM.render(
    <App/>, document.getElementById('ReactBox'));
