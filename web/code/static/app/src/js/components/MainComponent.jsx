var React = require('react');
var PropTypes = React.PropTypes;
var AppActions = require('../actions/actions.js');
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var HeaderComponent = require('./HeaderComponent.jsx');
var About = require('./about.jsx');
var Presentstion = require('./presentation.jsx');
var Portfolio = require('./portfolio.jsx');
var NewsBox = require('./newsBox.jsx');
var FormOrder = require('./formOrder.jsx');
var Reviews = require('./Reviews.jsx');
var Footer = require('./footer.jsx');
var Service = require('./service.jsx');
var Company = require('./company.jsx');
var Modal = require('./modal.jsx');
var HeaderaDetails = require('./headeraDetails.jsx');
var AboutDetails = require('./aboutDetails.jsx');
var NewsDetails = require('./newsDetail.jsx');
var ReviewsDetails = require('./reviewsDetails.jsx');
var WorksDetail = require('./worksDetail.jsx');
var VideoDetail = require('./videoDetail.jsx');
var NewsItemDetail = require('./newsItemDetail.jsx');
var WorkItemDetails = require('./workItemDetails.jsx');
var RevItemDetail = require('./revItemDetail.jsx');

var Main = React.createClass({
    getInitialState: function () {
        return {
            statusShowModal: AppStore.getState().statusShowModal,
            dataModal: AppStore.getState().dataModal,
            router: AppStore.getState().route
        };
    },
    componentWillUnmount: function () {
        AppStore.removeChangeStoreModuleListener(this.onChange);
    },
    onChange: function () {
        this.setState({
            statusShowModal: AppStore.getState().statusShowModal,
            dataModal: AppStore.getState().dataModal,
            router: AppStore.getState().route
        });

    },
    componentDidMount: function () {
        AppActions.getData();
        AppStore.addChangeStoreModuleListener(this.onChange)
    },
    render: function() {
        // console.log('main', this.state.router);
        if (this.state.router === '/') {
            return (
                <div>
                    <div className='bodyBox' >
                        <div className='header indentsMainsComponents'>
                            <HeaderComponent/>
                            <div id="trailer" className="is_overlay">
                                <video id="video" width="100%" height="auto" autoPlay="autoplay" loop="loop" preload="auto">
                                    <source src="/static/img/banner.mp4" type="video/mp4"></source>
                                    {/*<source src="book.webm" type="video/webm"></source>*/}
                                </video>
                            </div>
                        </div>
                        <div className='about indentsMainsComponents'>
                            <About/>
                        </div>
                        <div className='presentationBox'>
                            <Presentstion />
                        </div>
                        <div className='service indentsMainsComponents'>
                            <Service />
                        </div>
                        <div className='orderBox indentsMainsComponents'>
                            <FormOrder />
                        </div>
                        <div className='portfolio indentsMainsComponents'>
                            <Portfolio />
                        </div>
                        <div className='news indentsMainsComponents'>
                            <NewsBox />
                        </div>
                        <div className="company">
                            <Company/>
                        </div>
                        <div className='reviews indentsMainsComponents'>
                            <Reviews />
                        </div>
                        <footer className='footer indentsMainsComponents'>
                            <Footer/>
                        </footer>
                    </div>
                    <Modal/>
                </div>
            );
        }
        else if (this.state.router === '/about') {
            return (
                <div>
                    <div className='bodyBox' >
                        <div className='header indentsMainsComponents backgroundHeader'>
                            <HeaderaDetails/>
                        </div>
                    <AboutDetails/>
                        <footer className='footer indentsMainsComponents'>
                            <Footer/>
                        </footer>
                    </div>
                    <Modal/>
                </div>
            );
        }
        else if (this.state.router === '/news') {
            return (
                <div>
                    <div className='bodyBox' >
                        <div className='header indentsMainsComponents backgroundHeader'>
                            <HeaderaDetails/>

                        </div>
                        <NewsDetails/>
                        <footer className='footer indentsMainsComponents'>
                            <Footer/>
                        </footer>
                    </div>
                    <Modal/>
                </div>
            );
        }
        else if (this.state.router === '/news/:newsId') {
            return (
                <div>
                    <div className='bodyBox' >
                        <div className='header indentsMainsComponents backgroundHeader'>
                            <HeaderaDetails/>

                        </div>
                        <NewsItemDetail/>
                        <footer className='footer indentsMainsComponents'>
                            <Footer/>
                        </footer>
                    </div>
                    <Modal/>
                </div>
            );
        }
        else if (this.state.router === '/reviews') {
            return (
                <div>
                    <div className='bodyBox' >
                        <div className='header indentsMainsComponents backgroundHeader'>
                            <HeaderaDetails/>

                        </div>
                        <ReviewsDetails/>
                        <footer className='footer indentsMainsComponents'>
                            <Footer/>
                        </footer>
                    </div>
                    <Modal/>
                </div>
            );
        }
        else if (this.state.router === '/reviews/:rewId') {
            return (
                <div>
                    <div className='bodyBox' >
                        <div className='header indentsMainsComponents backgroundHeader'>
                            <HeaderaDetails/>

                        </div>
                        <RevItemDetail/>
                        <footer className='footer indentsMainsComponents'>
                            <Footer/>
                        </footer>
                    </div>
                    <Modal/>
                </div>
            );
        }
        else if (this.state.router === '/works') {
            return (
                <div>
                    <div className='bodyBox' >
                        <div className='header indentsMainsComponents backgroundHeader'>
                            <HeaderaDetails/>

                        </div>
                        <WorksDetail/>
                        <footer className='footer indentsMainsComponents'>
                            <Footer/>
                        </footer>
                    </div>
                    <Modal/>
                </div>
            );
        }
        else if (this.state.router === '/works/:workId') {
            return (
                <div>
                    <div className='bodyBox' >
                        <div className='header indentsMainsComponents backgroundHeader'>
                            <HeaderaDetails/>

                        </div>
                        <WorkItemDetails/>
                        <footer className='footer indentsMainsComponents'>
                            <Footer/>
                        </footer>
                    </div>
                    <Modal/>
                </div>
            );
        }
        else if (this.state.router === '/video') {
            return (
                <div>
                    <div className='bodyBox' >
                        <div className='header indentsMainsComponents backgroundHeader'>
                            <HeaderaDetails/>

                        </div>
                        <div className="company">
                            <VideoDetail/>
                        </div>
                        <footer className='footer indentsMainsComponents'>
                            <Footer/>
                        </footer>
                    </div>
                    <Modal/>
                </div>
            );
        }
    }

});

module.exports = Main;
