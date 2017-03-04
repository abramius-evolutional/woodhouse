'use strict'

var React = require('react');
var PropTypes = React.PropTypes;
var AppActions = require('../actions/actions.js');

var Form = React.createClass({
    getInitialState: function () {
        return {
            valueName: '',
            valuePhone: '',
            valueEmail: '',
            valueDiscription: '',
            borderName: null,
            borderPhone: null,
            borderEmail: null,
            borderDiscr: null
        };
    },
    onChangeName: function (e) {
        // console.log('form', e.target.value);
        this.setState({
            valueName: e.target.value,
            borderName: null
        });

    },
    onChangePhone: function (e) {
        this.setState({
            valuePhone: e.target.value,
            borderPhone: null
        });
    },
    onChangeEmail: function (e) {
        this.setState({
            valueEmail: e.target.value,
            borderEmail: null
        });
    },
    onChangeDiscr: function (e) {
        this.setState({
            valueDiscription: e.target.value,
            borderDiscr: null
        });
    },
    onSubmitMake: function () {
        this.setState({
            borderName: 'red',
            borderPhone: 'red',
            borderEmail: 'red',
            borderDiscr: 'red'
        });

        if (this.state.valueName !== '') {
            this.setState({
                borderName: null
            });
        }
        if (this.state.valuePhone !== '') {
            this.setState({
                borderPhone: null
            });
        }
        if (this.state.valueEmail !== '') {
            this.setState({
                borderEmail: null
            });
        }
        if (this.state.valueDiscription !== '') {
            this.setState({
                borderDiscr: null
            });
        }
        var data = {
            name: this.state.valueName,
            phone: this.state.valuePhone,
            email: this.state.valueEmail,
            description: this.state.valueDiscription
        };
        if (this.state.valueName !== '' && this.state.valuePhone !== '' && this.state.valueEmail !== '' && this.state.valueDiscription !== '') {
            AppActions.onSubmitMake(data);
            this.setState({
                valueName: '',
                valuePhone: '',
                valueEmail: '',
                valueDiscription: ''
            });
        }
    },
    render: function () {
        return(
            <div>
                <form className='formHeader'>
                    <h3>Закажите примерный расчет сметы</h3>
                    <div className="row">
                        <div className="boxInput">
                            <input style={{borderBottomColor: this.state.borderName}} value={this.state.valueName} onChange={this.onChangeName} placeholder='Введите имя' type='text'/>
                            <input style={{borderBottomColor: this.state.borderPhone}} value={this.state.valuePhone} onChange={this.onChangePhone} placeholder='Введите телефон' type='text'/>
                            <input style={{borderBottomColor: this.state.borderEmail}} value={this.state.valueEmail} onChange={this.onChangeEmail} placeholder='Введите e-mail' type='text'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="textBox">
                            <span>Что будем строить:</span>
                            <textarea style={{borderBottomColor: this.state.borderDiscr}} value={this.state.valueDiscription} onChange={this.onChangeDiscr} placeholder='Информация о заказе...'></textarea>
                        </div>
                    </div>
                    <button onClick={this.onSubmitMake} type="button">Отправить заявку</button>
                </form>
            </div>

        );
    }
});

module.exports = Form;
