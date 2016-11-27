'use strict'

var React = require('react');
var PropTypes = React.PropTypes;

var Form = React.createClass({
    render: function () {
        return(
            <div>
                <form className='formHeader'>
                    <h3>Закажите проектирование дома!</h3>
                    <div className="row">
                        <div className="boxInput">
                            <input placeholder='Введите имя' type='text'/>
                            <input placeholder='Введите телефон' type='text'/>
                            <input placeholder='Введите e-mail' type='text'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="textBox">
                            <span>Что будем строить:</span>
                            <textarea placeholder='Информация о заказе...'></textarea>
                        </div>
                    </div>
                    <button type="button">Отправить заявку</button>
                </form>
            </div>

        );
    }
});

module.exports = Form;
