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
            },
            function (err) {
                console.error(err);
            }
        );
    }
}



module.exports = Action;
