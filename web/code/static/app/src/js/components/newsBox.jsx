var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var NewsBox = React.createClass({
    getInitialState: function () {
        return {
            news: AppStore.getState().news,
            newsTop: AppStore.getState().newsTop
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
            news: AppStore.getState().news,
            newsTop: AppStore.getState().newsTop
        });

    },
    render: function () {
        var newsNode = this.state.newsTop.map(function (prop, id) {
            var discription = null;
            if (prop.description.length <= 550) {
                discription = prop.description;
            }
            else if (prop.description.length > 550) {
                discription = prop.description.substring(0, 550) + '...';
            }
            return(
                <div key={id} className="newsBoxItem">
                    <div><img src={prop.url[0]} alt={prop.title}/></div>
                    <div>
                        <h3>{prop.title}</h3>
                        <p>{discription}</p>
                        <div className="lineNews"></div>
                        <a href="">Подробнее...</a>
                    </div>
                </div>
            );
        })
        return(
            <div className="newsBox">
                <div style={{borderColor: '#fff'}} className="line"></div>
                <span>Новости</span>
                <span>Наши проекты</span>
                {newsNode}
                <Link to={'news'}>
                    <button>Больше...</button>
                </Link>
            </div>
        );
    }
});

module.exports = NewsBox;
