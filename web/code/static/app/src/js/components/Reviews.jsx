'use strict'

var React = require('react');
var PropTypes = React.PropTypes;
var ReviewsItem = require('./reviewsItem.jsx');

var Reviews = React.createClass({
    render: function () {
        return(
            <div className="reviewsBox">
                <ul className="reviewsList">
                    <ReviewsItem/>
                    <ReviewsItem/>
                    <ReviewsItem/>
                    <ReviewsItem/>
                </ul>
            </div>
        );
    }
});

module.exports = Reviews;
