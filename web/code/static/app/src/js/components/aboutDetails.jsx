'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');

var AboutDetails = React.createClass({
    getInitialState: function () {
        return {
            about: AppStore.getState().about
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
            about: AppStore.getState().about
        });

    },
    render: function () {
        // console.log('about', this.state.about.url);
        var componentDetailAbout = <div className="detailAboutBody">
        </div>
        if (this.state.about.url !== undefined) {
            var text1 = this.state.about.about.substring(0, 1500);
            var text2 = this.state.about.about.substring(1500, this.state.about.about.length - 1);
            var componentImage = this.state.about.url.map(function (prop, id) {
                return (
                    <img src={prop} alt="" key={id}/>
                );
            })
            componentDetailAbout = <div className="detailAboutBody">
                <h1>{this.state.about.title}</h1>
                {componentImage[0]}
                <p>{text1}</p>
                {componentImage[1]}
                {componentImage[2]}
                <p>{text2}</p>
                {componentImage[3]}
            </div>
        }
        console.log('about', this.state.about, componentImage);
        return (
            <div className="detailAboutBox">
                {componentDetailAbout}
            </div>
        );
    }
});

module.exports = AboutDetails;
