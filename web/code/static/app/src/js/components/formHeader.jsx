var React = require('react');
var PropTypes = React.PropTypes;

var Form = React.createClass({

    render: function() {
        return (
            <form className='formHeader'>
                <input placeholder='Введите имя' type='text'/>
                <input placeholder='Введите телефон' type='text'/>
                <input placeholder='Введите e-mail' type='text'/>
                <button type="button">Отправить заявку на расчет</button>
            </form>
        );
    }

});

module.exports = Form;
