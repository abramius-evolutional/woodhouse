'use strict'

var React = require('react');
var PropTypes = React.PropTypes;
var ReviewsItem = require('./reviewsItem.jsx');
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var Reviews = React.createClass({
    getInitialState: function () {
        return {
            reviews: AppStore.getState().reviews,
            reviewsTop: AppStore.getState().reviewsTop
        };
    },
    componentDidMount: function () {
        AppStore.addChangeStoreModuleListener(this.onChange)
    },
    componentWillUnmount: function () {
        AppStore.removeChangeStoreModuleListener(this.onChange);
    },
    onChange: function () {
        this.setState({
            reviews: AppStore.getState().reviews,
            reviewsTop: AppStore.getState().reviewsTop
        });

    },
    render: function () {
        // console.log('!!!!!!',this.state.reviewsTop);
        var reviewsNode = this.state.reviewsTop.map(function (prop, id) {
            return(
                <ReviewsItem prop={prop} key={id}/>
            );
        })
        return(
            <div className="reviewsBox">
                <div style={{borderColor: '#000'}} className="line"></div>
                <span>Отзывы</span>
                <ul className="reviewsList">
                    {reviewsNode}
                </ul>
                <Link to={'reviews'}>
                    <button>Все отзывы</button>
                </Link>
            </div>
        );
    }
});

module.exports = Reviews;
