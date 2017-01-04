var React = require('react');
var PropTypes = React.PropTypes;
var AppActions = require('../actions/actions.js');
var Form = React.createClass({
    getInitialState: function () {
        return {
            valueName: '',
            valuePhone: '',
            valueEmail: '',
            borderName: null,
            borderPhone: null,
            borderEmail: null
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
    onSubmitCalculation: function () {
        this.setState({
            borderName: 'red',
            borderPhone: 'red',
            borderEmail: 'red'
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
        var data = {
            name: this.state.valueName,
            phone: this.state.valuePhone,
            email: this.state.valueEmail
        };
        if (this.state.valueName !== '' && this.state.valuePhone !== '' && this.state.valueEmail !== '') {
            AppActions.onSubmitCalculation(data);
        }
    },
    render: function() {
        return (
            <form className='formHeader'>
                <input style={{borderBottomColor: this.state.borderName}} onChange={this.onChangeName} placeholder='Введите имя' type='text'/>
                <input style={{borderBottomColor: this.state.borderPhone}} onChange={this.onChangePhone} placeholder='Введите телефон' type='text'/>
                <input style={{borderBottomColor: this.state.borderEmail}} onChange={this.onChangeEmail} placeholder='Введите e-mail' type='text'/>
                <button onClick={this.onSubmitCalculation} type="button">Отправить заявку на расчет</button>
            </form>
        );
    }

});

module.exports = Form;
