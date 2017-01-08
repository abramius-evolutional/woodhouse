/** @jsx React.DOM */
// rcc
// var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('./actions/actions.js');
var AppStore = require('./stores/store.js');
var ComponentBody = require('./components/MainComponent.jsx');
var browserHistory = require('react-router').browserHistory;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var React = require('react');
var PropTypes = React.PropTypes;

var App = React.createClass({
    getInitialState: function () {
        return {
            statusLocation: '/'
        };
    },
    internalState: {
        statusLocation: '/'
    },
    componentDidUpdate: function(prevProps, prevState) {
        console.log('main', this.props.routes);
        if (this.props.routes[2] !== undefined) {
            // console.log('main', this.props.routes, this.props.routes[2].path, document.location.pathname.split('/')[2]);
            this.internalState.statusLocation = this.props.routes[2].path;
            var dataParams = {
                pathPouter: this.props.routes[2].path,
                routerId: +document.location.pathname.split('/')[2]
            };
            AppActions.getRouterParams(dataParams);
            AppActions.updateRoute(this.props.routes[2].path);
        }
        else if (this.props.routes[2] === undefined) {
            if (this.props.routes[1] === undefined) {
                this.internalState.statusLocation = this.props.routes[0].path;
                AppActions.updateRoute(this.props.routes[0].path);
            }
            else if (this.props.routes[1] !== undefined) {
                this.internalState.statusLocation = this.props.routes[1].path;
                AppActions.updateRoute(this.props.routes[1].path);
            }
        }
        // console.log('main', this.internalState.statusLocation);
        // if (jsonLocation !== document.location.href) {
        //     jsonLocation = document.location.href;
        //     AppActions.onChangeLoction(document.location.href);
        // }
        // // AppActions.onChangeLoction(document.location.href);
        // // var dataParamsRoute = {
        // //     params: this.props.params,
        // //     do
        // // }
        // var real = {
        //     params: this.props.params,
        //     routes: this.props.routes
        // };
        // var prevew = {
        //     params: prevProps.params,
        //     routes: prevProps.routes
        // };
        // if (JSON.stringify(prevew) !== JSON.stringify(real)) {
        //     // console.log('Main.jsxCDU', this.props.routes[1].path);
        //     if (this.props.routes[1] !== undefined) {
        //         // console.log('Main.jsxCDU');
        //         if (this.props.routes[1].path === '/hotspot/:method/:objects/:dateMin/:dateMax') {
        //             // console.log('Main.jsxCDU/hotspot/:method/:objects/:dateMin/:dateMax', this.props.params);
        //             AppActions.selectRouterHotspot(this.props.params);
        //             TabsPanelActions.getParamsRouter(this.props.params);
        //         } else if (this.props.routes[1].path === 'analitics') {
        //             AppActions.selectRouterAnalitics(this.props.routes[1].path);
        //         } else if (this.props.routes[1].path === '/settings') {
        //             AppActions.selectRouterSettings(this.props.routes[1].path);
        //         }
        //     }
        // }
    },
    componentDidMount: function () {
        console.log('main', this.props.routes);
        if (this.props.routes[2] !== undefined) {
            console.log('main', this.props.routes, this.props.routes[2].path, document.location.pathname.split('/')[2]);
            this.internalState.statusLocation = this.props.routes[2].path;
            var dataParams = {
                pathPouter: this.props.routes[2].path,
                routerId: +document.location.pathname.split('/')[2]
            };
            AppActions.getRouterParams(dataParams);
            AppActions.updateRoute(this.props.routes[2].path);
        }
        else if (this.props.routes[2] === undefined) {
            if (this.props.routes[1] === undefined) {
                this.internalState.statusLocation = this.props.routes[0].path;
                AppActions.updateRoute(this.props.routes[0].path);
            }
            else if (this.props.routes[1] !== undefined) {
                this.internalState.statusLocation = this.props.routes[1].path;
                AppActions.updateRoute(this.props.routes[1].path);
            }
        }
        // console.log('main', this.internalState.statusLocation);
    },

    render: function() {
        return (
            <div>
                <ComponentBody />
            </div>
        );
    }

});

App.contextTypes = {
    router: PropTypes.object.isRequired
}

module.exports = App;

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={App}/>
            <Route path="/news" component={App}>
                <Route path="/news/:newsId" component={App}/>
            </Route>
            <Route path="/reviews" component={App}/>
            <Route path="/video" component={App}/>
            <Route path="/works" component={App}>
                <Route path="/works/:workId" component={App}/>
            </Route>
        </Route>
    </Router>, document.getElementById('ReactBox'));
