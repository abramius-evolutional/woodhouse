'use strict'

var React = require('react');
var PropTypes = React.PropTypes;
var Form = require('./formHeader.jsx');
var Header = React.createClass({

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
                            <span className='phone'>8 950 990 90 90</span>
                            <span className='order'>Заказать звонок</span>
                        </div>
                        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
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
