'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var VideoDetail = React.createClass({
    getInitialState: function () {
        return {
            video: AppStore.getState().video
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
            video: AppStore.getState().video
        });

    },
    render: function () {
        var videoNode = null;
        if (this.state.video.length > 0) {
            videoNode = this.state.video.map(function (prop, id) {
                var discription = null;
                if (prop.description.length <= 200) {
                    discription = prop.description;
                }
                else if (prop.description.length > 200) {
                    discription = prop.description.substring(0, 200) + '...';
                }
                return(
                    <div key={id} className="itemVideoBox">
                        <div className="headerVideo">
                            <iframe width="100%" height="100%" src={prop.video_url} frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="discriptionBoxVideo">
                            <h3>{prop.title}</h3>
                            <p>{discription}</p>
                        </div>
                    </div>
                );
            })
        }
        return (
            <div className="boxCompany">
                <span>Видео</span>
                {videoNode}
                <div style={{clear: 'both', float: 'none', width: '100%', height: '0px', padding: '0px', margin: '0px', display: 'block'}}></div>
            </div>
        );
    }
});

module.exports = VideoDetail;
