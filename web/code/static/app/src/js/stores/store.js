var AppDispatcher = require('../dispatcher/dispatcher.js');
var AppConstants = require('../constants/constants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var state = {
	about: {
	},
    works: [],
    newWorks: [],
    news: [],
    newsTop: [],
    reviews: [],
    reviewsTop: [],
    statusShowModal: false,
    dataModal: {
	    status: '',
        data: {}
    },
    statusLoadCalc: 'false',
    route: '/',
    video: [],
    videoTop: [],
    routerParamsId: 0,
    dataParamItems: {}
}



EventEmitter.prototype._maxListeners = 300

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
	moduleChangeStoreListeners: [],
	addChangeStoreModuleListener: function(callback) {
		if (this.moduleChangeStoreListeners.indexOf(callback) == -1) {
			this.moduleChangeStoreListeners.push(callback);
		}
	},
	removeChangeStoreModuleListener: function (callback) {
		if (this.moduleChangeStoreListeners.indexOf(callback) != -1) {
			this.moduleChangeStoreListeners.splice(this.moduleChangeStoreListeners.indexOf(callback), 1);
		}
	},
	emitChangeToModuleListeners: function () {
		for (var i = 0; i < this.moduleChangeStoreListeners.length; i++) {
			this.moduleChangeStoreListeners[i](state);
		}
	},
	getAbout: function (data) {
		// console.log('store', data[0].phone.substring(0, 1));
        // substring(0, 23)
        // console.log('store', data);
        state.about = data[0];
        if (data[0].phone.substring(0, 1) === '+') {
            var number = data[0].phone.substring(0, 2) +
                ' ' +
                data[0].phone.substring(2, 5) +
                ' ' +
                data[0].phone.substring(5, 8) +
                ' ' +
                data[0].phone.substring(8, 10) +
                ' ' +
                data[0].phone.substring(10, 12);
            state.about.phone = number;
        }
        else if (data[0].phone.substring(0, 1) === '8') {
            var number = data[0].phone.substring(0, 1) +
                ' ' +
                data[0].phone.substring(1, 4) +
                ' ' +
                data[0].phone.substring(4, 7) +
                ' ' +
                data[0].phone.substring(7, 9) +
                ' ' +
                data[0].phone.substring(9, 11);
            state.about.phone = number;
        }
        // console.log('store>>>>', number);
		this.emitChangeToModuleListeners();
        // console.log('store>>>>', number);
	},
    getIndicator: function (data) {
        this.emitChangeToModuleListeners();
    },
    getRouterParams: function (data) {
	    state.routerParamsId = data.routerId;
	    if (data.pathPouter === '/news/:newsId') {
            // console.log('store>>>>', state.news);
	        for (var i = 0; i < state.news.length; i++) {
	            if (state.news[i].id === state.routerParamsId) {
	                state.dataParamItems = state.news[i];
                }
	        }
        }
        else if(data.pathPouter === '/works/:workId') {
            for (var i = 0; i < state.works.length; i++) {
                if (state.works[i].id === state.routerParamsId) {
                    state.dataParamItems = state.works[i];
                }
            }
        }
        else if(data.pathPouter === '/reviews/:rewId') {
            for (var i = 0; i < state.reviews.length; i++) {
                if (state.reviews[i].id === state.routerParamsId) {
                    state.dataParamItems = state.reviews[i];
                }
            }
        }
        this.emitChangeToModuleListeners();
    },
	getWork: function (data) {
        state.works = JSON.parse(JSON.stringify(data));
        if (data.length <= 3) {
            state.newWorks = data;
        }
        else if (data.length > 3) {
            state.newWorks = JSON.parse(JSON.stringify(data));
            state.newWorks = state.newWorks.slice(data.length - 4, data.length - 1);
            console.log("logloglog",state.newWorks)
        }
        if(state.route === '/works/:workId') {
            for (var i = 0; i < state.works.length; i++) {
                if (state.works[i].id === state.routerParamsId) {
                    state.dataParamItems = state.works[i];
                }
            }
        }
        // console.log('store>>>', state.newWorks);
        this.emitChangeToModuleListeners();
    },
	getComments: function (data) {
        // console.log('store', data);
        state.reviews = data;
        if (data.length <= 4) {
            state.reviewsTop = data;
        }
        else if (data.length > 4) {
            state.reviewsTop = data;
            state.reviewsTop.splice(0, data.length - 4);
        }
        if(state.route === '/reviews/:rewId') {
            for (var i = 0; i < state.reviews.length; i++) {
                if (state.reviews[i].id === state.routerParamsId) {
                    state.dataParamItems = state.reviews[i];
                }
            }
        }
        this.emitChangeToModuleListeners();
    },
	getNews: function (data) {
	    state.news = data;
        if (data.length <= 3) {
            state.newsTop = data;
        }
        else if (data.length > 3) {
            state.newsTop = data;
            state.newsTop.splice(0, data.length - 3);
        }
        if (state.route === '/news/:newsId') {
            // console.log('store>>>', state.news);
            for (var i = 0; i < state.news.length; i++) {
                // console.log('store>>>', state.news[i].id, state.routerParamsId);
                if (state.news[i].id === state.routerParamsId) {
                    state.dataParamItems = state.news[i];
                }
            }
        }
        // console.log('store', data);
        this.emitChangeToModuleListeners();
    },
    getVideo: function (data) {
        state.video = data;
        if (data.length <= 6) {
            state.videoTop = data;
        }
        else if (data.length > 6) {
            state.videoTop = data;
            state.videoTop.splice(0, data.length - 6);
        }
        this.emitChangeToModuleListeners();
    },
    openModal: function (data) {
        state.statusShowModal = true;
        state.dataModal.status = data.status;
        state.dataModal.data = data.data;
        this.emitChangeToModuleListeners();
    },
    hideModal: function () {
        state.statusShowModal = false;
        this.emitChangeToModuleListeners();
    },
    onLoadStatusCalc: function (e) {
        statusLoadCalc: e;
        this.emitChangeToModuleListeners();
    },
    updateRoute: function (data) {
	    state.route = data;
        this.emitChangeToModuleListeners();
    },
	getState: function() {
		return state;
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    route: function(actionType) {
    	switch (actionType) {

    	}
    }
});

AppDispatcher.register(function(payload){
	var func = AppStore.route(payload.action.actionType);
	if (func != null) {
		func(payload.action);
		AppStore.emitChange();
		AppStore.emitChangeToModuleListeners();
	};
	return true;
});



module.exports = AppStore; 
