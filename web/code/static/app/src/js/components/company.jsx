'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var Company = React.createClass({
    getInitialState: function () {
        return {
            videoTop: AppStore.getState().videoTop
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
            videoTop: AppStore.getState().videoTop
        });

    },
    render: function () {
        // console.log('video', this.state.videoTop);
        var videoNode = null;
        if (this.state.videoTop.length > 0) {
            videoNode = this.state.videoTop.map(function (prop, id) {
                console.log('video', prop.description.length);
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
                <div style={{borderColor: '#000'}} className="line"></div>
                <span>Видео</span>
                {videoNode}
                <div style={{clear: 'both', float: 'none', width: '100%', height: '0px', padding: '0px', margin: '0px', display: 'block'}}></div>
                <Link to={'video'}>
                    <button>Перейти в галерею</button>
                </Link>
            </div>
        );
    }
});

module.exports = Company;
