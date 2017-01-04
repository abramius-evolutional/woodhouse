'use strict'

var React = require('react');
var PropTypes = React.PropTypes;
var Form = require('./formHeader.jsx');
var AppStore = require('../stores/store.js');
var Header = React.createClass({
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
    render: function() {
        return (
            <div className='headerBox'>
                <div className='headerHeaderBox'>
                    <div className='logoBox'>
                        <a href='' className='logo'></a>
                        <a href='' className='logoTitle'>
                            <h2>PozinProject</h2>
                            <span>Гармония деревянного дома</span>
                        </a>
                    </div>
                    <div className='headerMenu'>
                        <div className='phoneBox'>
                            <span className='phone'>{this.state.about.phone}</span>
                            {/*<span className='order'>Заказать звонок</span>*/}
                        </div>
                        <i className="fa fa-bars fa-2x" aria-hidden="true">
                            <div className="boxListForums">
                                <ul>
                                    <li>О нас</li>
                                    <li>Наши работы</li>
                                    <li>Новости</li>
                                    <li>Видео</li>
                                    <li style={{borderBottom: '1px solid rgba(0,0,0,.4)'}}>Отзывы</li>
                                </ul>
                            </div>
                        </i>
                    </div>
                </div>
                <div className='headerTitle'>
                    <h2>Строительство и проектирование</h2>
                    <h2>роскошных бревенчатых домов</h2>
                    <p>Настоящие деревянные дома из сибирского леса под ключ</p>
                </div>
                <div className='orderDiscription'>
                    <span>ОСТАВЬТЕ ЗАЯВКУ ПРЯМО СЕЙЧАС И ПОЛУЧИТЕ РАСЧЕТ СМЕТЫ ДОМА ВАШЕЙ - бесплатно!</span>
                    <div>
                        <Form/>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Header;
