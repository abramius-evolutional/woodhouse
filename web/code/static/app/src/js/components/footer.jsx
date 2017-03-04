'use strict'

var React = require('react');
var PropTypes = React.PropTypes;
var ReviewsItem = require('./reviewsItem.jsx');
var AppStore = require('../stores/store.js');

var Footer = React.createClass({
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
        // console.log('footer', this.state.about.email);
        return(
            <div className="footerBox">
                <h4>Наши контакты</h4>
                <div className="contacts">
                    <div>
                        <i className="fa fa-phone" ></i>
                        <span style={{fontWeight: 600}}>{this.state.about.phone}</span>
                    </div>
                    <div>
                        <i className="fa fa-envelope-o" ></i>
                        <span>{this.state.about.email}</span>
                    </div>
                </div>
                <div className="adress">
                    <span>Адрес производства</span>
                    <p>{this.state.about.address}</p>
                </div>
                <div className="iconBox">
                    <div className='logoBox footerText'>
                        <a href='' className='logo footerText footerLogoSize'></a>
                        <a href='' className='logoTitle footerText footerLogoText'>
                            <h2>PozinProject</h2>
                            <span>Гармония деревянного дома</span>
                        </a>
                    </div>
                    <div className="socialIcons">
                        <a href="http://instagram.com/pozin.project" target="blanck"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                        <a href="https://www.youtube.com/channel/UCr1Hc-j1n_NPcUyCOZGmh_w/feed" target="blanck"><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></a>
                    </div>
                    <div></div>
                    <div style={{clear: 'both'}}></div>
                </div>
            </div>
        );
    }
});

module.exports = Footer;
