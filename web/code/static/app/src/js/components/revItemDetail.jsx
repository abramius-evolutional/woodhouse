'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var RevItemDetail = React.createClass({
    getInitialState: function () {
        return {
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
            dataParamItems: AppStore.getState().dataParamItems
        });

    },
    render: function () {
        console.log('rev', this.state.dataParamItems.url);
        return (
            <div className="newsDetailBox">
                <div className="newsDetailBody reviewsDetailsBody">
                    <div className="titleBoxDetailNews">
                        <h1>{this.state.dataParamItems.title}</h1>
                    </div>
                    <div className="contentCommetnsItemDetails">
                        <div className="boxImageComments">
                            <img src={this.state.dataParamItems.url} alt=""/>
                        </div>
                        <div className="boxTextComments">
                            <span>{this.state.dataParamItems.dt}</span>
                            <p>{this.state.dataParamItems.description}</p>
                        </div>
                        <div style={{clear: 'both', float: 'none', width: '100%', height: '0px', padding: '0px', margin: '0px', display: 'block'}}></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = RevItemDetail;
