var React = require('react');
var PropTypes = React.PropTypes;
var AppActions = require('../actions/actions.js')
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

var Main = React.createClass({
    componentDidMount: function () {
        AppActions.getData();
    },
    render: function() {
        return (
            <div className='bodyBox'>
                <div className='header indentsMainsComponents'>
                    <HeaderComponent/>
                    <div id="trailer" className="is_overlay">
                        <video id="video" width="100%" height="auto" autoPlay="autoplay" loop="loop" preload="auto">
                            <source src="/static/img/banner.mov"></source>
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
        );
    }

});

module.exports = Main;