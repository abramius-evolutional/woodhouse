'use strict'

var React = require('react');
var PropTypes = React.PropTypes;
var ReviewsItem = require('./reviewsItem.jsx');

var Footer = React.createClass({
    render: function () {
        return(
            <div className="footerBox">
                <h4>Наши контакты</h4>
                <div className="contacts">
                    <div>
                        <i className="fa fa-phone" ></i>
                        <span style={{fontWeight: 600}}>+7 999 999 99 99</span>
                    </div>
                    <div>
                        <i className="fa fa-envelope-o" ></i>
                        <span>kirdro@yandex.ru</span>
                    </div>
                </div>
                <div className="adress">
                    <span>Адрес производства</span>
                    <p>Красноясркий край, Курагинский район, д. Петропавловка, строительная площадка "Позин проект"</p>
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

                    </div>
                    <div></div>
                    <div style={{clear: 'both'}}></div>
                </div>
            </div>
        );
    }
});

module.exports = Footer;
