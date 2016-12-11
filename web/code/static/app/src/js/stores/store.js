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
    }
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
	getWork: function (data) {
        state.works = data;
        if (data.length === 3) {
            state.newWorks = data;
        }
        else if (data.length > 3) {
            state.newWorks = data;
            state.newWorks.splice(0, data.length - 3);
        }
        // console.log('store>>>', state.newWorks);
        this.emitChangeToModuleListeners();
    },
	getComments: function (data) {
        console.log('store', data);
        state.reviews = data;
        if (data.length === 4) {
            state.reviewsTop = data;
        }
        else if (data.length > 4) {
            state.reviewsTop = data;
            state.reviewsTop.splice(0, data.length - 4);
        }
        this.emitChangeToModuleListeners();
    },
	getNews: function (data) {
	    state.news = data;
        if (data.length === 3) {
            state.newsTop = data;
        }
        else if (data.length > 3) {
            state.newsTop = data;
            state.newsTop.splice(0, data.length - 3);
        }
        // console.log('store', data);
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
