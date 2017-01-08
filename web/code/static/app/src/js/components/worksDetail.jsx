'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var AppActions = require('../actions/actions.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var WorksDetail = React.createClass({
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
        var worksNode = this.state.works.map(function (prop, id) {
            var description = prop.description;
            if (prop.description.length > 200) {
                description = prop.description.substring(0, 200)
            }
            function onclickWork() {
                func(prop);
            }
            return(
                <div key={id} className="portfolioItem">
                    <div>
                        <img src={prop.url[0]} alt={prop.title}/>
                    </div>
                    <div className="boxDiscription">
                        <h3>{prop.title}</h3>
                        <p>
                            {description}
                            <Link to={`/works/${prop.id}`}>
                                <button type="button" className="aboutMore">...</button>
                            </Link>
                        </p>
                    </div>
                </div>
            );
        });
        return (
            <div className="boxWorksDetail">
                <div className="portfolioBox worksDetailsBody">
                    <div className="titleBoxDetailNews">
                        <h1>Наши работы</h1>
                    </div>
                    {worksNode}
                </div>
            </div>
        );
    }
});

module.exports = WorksDetail;
