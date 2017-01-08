'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var ReviewsDetails = React.createClass({
    getInitialState: function () {
        return {
            reviews: AppStore.getState().reviews
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
            reviews: AppStore.getState().reviews
        });

    },
    render: function () {
        var listNode = null;
        if (this.state.reviews.length > 0) {
            listNode = this.state.reviews.map(function (prop, id) {
                var discription;
                if (prop.description.length <= 150) {
                    discription = this.props.prop.description;
                }
                else if (prop.description.length > 150) {
                    discription = prop.description.substring(0, 150) + '...'
                }
                return(
                    <li key={id}>
                        <img src={prop.url} />
                        <div>
                            <h4>{prop.title}</h4>
                            <p>
                                {discription}
                            </p>
                            <Link to={`/reviews/${prop.id}`}>подробнее...</Link>
                        </div>
                    </li>
                );
            })
        }
        return (
            <div className="newsDetailBox">
                <div className="newsDetailBody reviewsDetailsBody">
                    <div className="titleBoxDetailNews">
                        <h1>Отзывы</h1>
                    </div>
                    <ul className="reviewsList">
                        {listNode}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = ReviewsDetails;
