'use strict'

var React = require('react');
var PropTypes = React.PropTypes;

var Presentation = React.createClass({
    render: function () {
        return (
            <div className="presentationBoxItem">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/J4kCd-C1QBM" frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    }
})

module.exports = Presentation;