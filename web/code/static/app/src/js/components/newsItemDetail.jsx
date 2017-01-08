'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var NewsItemDetail = React.createClass({
    getInitialState: function () {
        return {
            news: AppStore.getState().news,
            dataParamItems: AppStore.getState().dataParamItems
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
            news: AppStore.getState().news,
            dataParamItems: AppStore.getState().dataParamItems
        });

    },
    render: function () {
        // console.log('newsItem', this.state.dataParamItems);
        var imageNode = null;
        if (this.state.dataParamItems.url !== undefined) {
            imageNode = this.state.dataParamItems.url.map(function (prop, id) {
                return(
                    <img key={id} src={prop} alt=""/>
                );
            })
        }
        return (
            <div className="itemNewsDetailBox">
                <div className="itemNewsDetailBody">
                    <h1>{this.state.dataParamItems.title}</h1>
                    <span>{this.state.dataParamItems.dt}</span>
                    <p>{this.state.dataParamItems.description}</p>
                    {imageNode}
                </div>
            </div>
        );
    }
});

module.exports = NewsItemDetail;
