'use strict'

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var AppActions = require('../actions/actions.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var Portfolio = React.createClass({
    getInitialState: function () {
        return {
            works: AppStore.getState().works,
            newWorks: AppStore.getState().newWorks
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
            works: AppStore.getState().works,
            newWorks: AppStore.getState().newWorks
        });

    },
    onClickWorks: function (e) {
        AppActions.openModal({status: 'work', data: e});
        // console.log('portfolio', e);
    },
    render: function () {
        var func = this.onClickWorks;
        var worksNode = this.state.newWorks.map(function (prop, id) {
            var description = prop.description;
            if (prop.description.length > 200) {
                description = prop.description.substring(0, 200) + '...';
            }
            function onclickWork() {
                func(prop);
            }
            var styleH3 = null;
            if (prop.title.length > 30) {
                styleH3 = {fontSize: '14px'};
            }
            return(
                <div key={id} className="portfolioItem">
                    <div>
                        <Link to={`/works/${prop.id}`}>
                            <img src={prop.url[0]} alt={prop.title}/>
                        </Link>
                    </div>
                    <div className="boxDiscription">
                        <h3 style={styleH3}>{prop.title}</h3>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            );
        });

        return(
            <div className="portfolioBox">
                <div className="portfolioTitle">
                    <div className="line"></div>
                    <span>Наши работы</span>
                    <span>Этапы строительства и итоги работы</span>
                </div>
                {worksNode}
                <Link to={'works'}>
                    <button>Перейти в галерею</button>
                </Link>
            </div>
        );
    }
});

module.exports = Portfolio;








