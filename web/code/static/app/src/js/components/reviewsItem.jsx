'use strict'

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var ReviewsItem = React.createClass({
    render: function () {
        // console.log('rewItems', this.props.prop);
        var discription;
        if (this.props.prop.description.length <= 150) {
            discription = this.props.prop.description;
        }
        else if (this.props.prop.description.length > 150) {
            discription = this.props.prop.description.substring(0, 150) + '...'
        }
        return(
            <li>
                <img src={this.props.prop.url} />
                <div>
                    <h4>{this.props.prop.title}</h4>
                    <p>
                        {discription}
                    </p>
                    <Link to={`/reviews/${this.props.prop.id}`}>подробнее...</Link>
                </div>
            </li>
        );
    }
});

module.exports = ReviewsItem;
