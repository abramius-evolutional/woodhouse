'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var AppActions = require('../actions/actions.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var ImageGallery = require('react-image-gallery').default;

var WorkItemDetails = React.createClass({
    getInitialState: function () {
        return {
            dataParamItems: AppStore.getState().dataParamItems,
            slideInterval: 4000
        };
    },
    componentDidUpdate: function (prevProps, prevState, prevContext) {
        if (this.state.slideInterval !== prevState.slideInterval) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
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
    handleImageLoad: function (event) {
        console.log('Image loaded ', event.target)
    },
    render: function () {
        // console.log('work', this.state.dataParamItems.description);
        var imageArr = [];
        if (this.state.dataParamItems.url !== undefined) {
            for (var i = 0; i < this.state.dataParamItems.url.length; i++) {
                var obj = {
                    original: this.state.dataParamItems.url[i],
                    thumbnail: this.state.dataParamItems.url[i]
                }
                imageArr.push(obj);
            }
        }
        return (
            <div className="modalBox">
                <div className="headerModal">
                    <h1>{this.state.dataParamItems.title}</h1>
                </div>
                <div className="boxImage">
                    <ImageGallery
                        items={imageArr}
                        slideInterval={parseInt(this.state.slideInterval)}
                        onImageLoad={this.handleImageLoad}/>
                </div>
                <div className="footerModal">
                    <p>{this.state.dataParamItems.description}</p>
                </div>
                <div style={{clear: 'both', float: 'none', width: '100%', height: '0px', padding: '0px', margin: '0px', display: 'block'}}></div>
            </div>
        );
    }
});

module.exports = WorkItemDetails;
