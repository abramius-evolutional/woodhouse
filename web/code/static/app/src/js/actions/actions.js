var AppDispatcher = require('../dispatcher/dispatcher.js');
var AppConstants = require('../constants/constants.js');
var AppStores = require('../stores/store.js');
var Api = require('../api/api.js');


var Action = {
    getData: function () {
        Api.getData(
            function (params, data) {
                // console.log('actions', data, params);
                if (params === 'about') {
                    AppStores.getAbout(data);
                }
                else if (params === 'comments') {
                    AppStores.getComments(data);
                }
                else if (params === 'news') {
                    AppStores.getNews(data);
                }
                else if (params === 'work') {
                    AppStores.getWork(data);
                }
                else if (params === 'indicator') {
                    AppStores.getIndicator(data);
                }
                else if (params === 'video') {
                    AppStores.getVideo(data);
                }
            },
            function (err) {
                console.error(err);
            }
        );
    },
    openModal: function (data) {
        AppStores.openModal(data);
    },
    hideModal: function () {
        AppStores.hideModal();
    },
    onSubmitCalculation: function (e) {
        Api.onSubmitCalculation(e,
            function (data) {
                console.log('actions', data);

            },
            function (err) {
                console.error(err);
                alert('Не удалось отправить заявку повторите еще раз');
            }
        );
    },
    onSubmitMake: function (e) {
        Api.onSubmitMake(e,
            function (data) {
                console.log('actions', data);

            },
            function (err) {
                console.error(err);
                alert('Не удалось отправить заявку повторите еще раз');
            }
        );
    },
    updateRoute: function (data) {
        AppStores.updateRoute(data);
    }
}



module.exports = Action;
