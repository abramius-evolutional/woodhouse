'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');
var AppActions = require('../actions/actions.js');
var ImageGallery = require('react-image-gallery').default;

var Modal = React.createClass({
    getInitialState: function () {
        return {
            statusShowModal: AppStore.getState().statusShowModal,
            dataModal: AppStore.getState().dataModal,
            slideInterval: 4000
        };
    },
    componentDidUpdate: function (prevProps, prevState, prevContext) {
        if (this.state.slideInterval !== prevState.slideInterval) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
    },
    componentDidMount: function () {
        AppStore.addChangeStoreModuleListener(this.onChange)
    },
    componentWillUnmount: function () {
        AppStore.removeChangeStoreModuleListener(this.onChange);
    },
    onChange: function () {
        this.setState({
            statusShowModal: AppStore.getState().statusShowModal,
            dataModal: AppStore.getState().dataModal
        });
    },
    onHide: function (e) {
        if (e.target === document.getElementById('background')) {
            AppActions.hideModal();
        }
    },
    hidePanel: function () {
        AppActions.hideModal();
    },
    handleImageLoad: function (event) {
        console.log('Image loaded ', event.target)
    },
    render: function () {
        console.log('modal', this.state.dataModal);
        if (this.state.statusShowModal === false) {
            return null;
        }
        else if (this.state.statusShowModal === true) {
            if (this.state.dataModal.status === 'work') {
                var imageArr = [];
                for (var i = 0; i < this.state.dataModal.data.url.length; i++) {
                    var obj = {
                        original: this.state.dataModal.data.url[i],
                        thumbnail: this.state.dataModal.data.url[i]
                    }
                    imageArr.push(obj);
                }
                // console.log('modal?????', imageArr);
                return (
                    <div onClick={this.onHide} id="background" className="modalBackground">
                        <div className="modalBox">
                            <div className="headerModal">
                                <h1>{this.state.dataModal.data.title}</h1>
                                <span onClick={this.hidePanel} className="hideModal">X</span>
                            </div>
                            <div className="boxImage">
                                <ImageGallery
                                    items={imageArr}
                                    slideInterval={parseInt(this.state.slideInterval)}
                                    onImageLoad={this.handleImageLoad}/>
                            </div>
                            <div className="footerModal">
                                <p>{this.state.dataModal.data.description}</p>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
});

module.exports = Modal;
