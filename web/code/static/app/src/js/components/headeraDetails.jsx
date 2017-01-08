'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var HeaderaDetails = React.createClass({
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
        return (
                <div className='headerBox'>
                    <div className='headerHeaderBox'>
                        <div className='logoBox'>
                            <Link to={'/'} className='logo'></Link>
                            <Link to={'/'} href='' className='logoTitle'>
                                <h2>PozinProject</h2>
                                <span>Гармония деревянного дома</span>
                            </Link>
                        </div>
                        <div className='headerMenu'>
                            <div className='phoneBox'>
                                <span className='phone'>{this.state.about.phone}</span>
                                {/*<span className='order'>Заказать звонок</span>*/}
                            </div>
                            <i className="fa fa-bars fa-2x" aria-hidden="true">
                                <div className="boxListForums">
                                    <ul>
                                        <li>
                                            <Link to={'/about'}>
                                                О нас
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/works'}>
                                                Наши работы
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/news'}>
                                                Новости
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/video'}>
                                                Видео
                                            </Link>
                                        </li>
                                        <li style={{borderBottom: '1px solid rgba(0,0,0,.4)'}}>
                                            <Link to={'/reviews'}>
                                                Отзывы
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </i>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = HeaderaDetails;
