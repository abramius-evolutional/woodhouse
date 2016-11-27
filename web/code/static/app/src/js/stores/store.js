var AppDispatcher = require('../dispatcher/dispatcher.js');
var AppConstants = require('../constants/constants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

Date.prototype.daysInMonth = function() {
	return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};

Date.prototype.yyyymmdd = function() {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth() + 1).toString();
	var dd = this.getDate().toString();
	return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]);
};

Date.prototype.yyyy_mm_dd = function() {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth() + 1).toString();
	var dd = this.getDate().toString();
	return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]);
};

var state = {
	mainState: {},
	malls: [],
	statusShowMalls: false,
	dataMall: [],
	temporarilyDataMall: [],
	statusLoad: false,
	statusSelectMall: [],
	idSelectMall: null,
	search: '',
	statusShowCalendar: false,
	maxDate: new Date().yyyy_mm_dd(),
	minDate: new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate()).yyyy_mm_dd(),
	statusAllSelect: 'off',
	quantity: null,
	nameInterval: 'daily',
	statusTimeSelect: null,
	mallsFilter: [],
	routerDataObjects: [],
	statusShowPanelObjects: false,
	statusAnaliticsMethod: null
}


function selectStatusLoadFalse() {
	state.statusLoad = false;
};

function update (action) {
	state.mainState.insetName = action.state.commonState.insetName;
	state.mainState.selectedObjects = action.state.commonState.selectedObjects;
	state.mainState.max_timestamp = action.state.commonState.max_timestamp;
	state.mainState.min_timestamp = action.state.commonState.min_timestamp;
	// state.maxDate = new Date(action.state.commonState.max_timestamp).yyyymmdd();
	// state.minDate = new Date(action.state.commonState.min_timestamp).yyyymmdd();
	state.mainState.password = action.state.commonState.password;
	state.mainState.token = action.state.commonState.token;
	state.mainState.username = action.state.commonState.username;
	state.mainState.commonState = action.state.commonState.username;

};

function getMallsList(action) {
	// console.log('store.js!!!!!!!!!!');
	state.malls = [];
	state.dataMall = [];
	state.listMalls = [];
	state.statusLoad = true;
	if (state.routerDataObjects.length === 0) {
		// state.malls = action.data.value;
		state.dataMall[0] = action.data[0];
		state.listMalls.push(action.data[0]);
		for (var i = 0; i < action.data.length; i++) {
			var obj = {
				data: action.data[i],
				status: false
			}
			state.malls.push(obj);
		}
		state.malls[0].status = true;
		state.temporarilyDataMall[0] = {
			data: state.malls[0].data,
			status: true
		};
		state.statusAllSelect = 'average';
		selectedMall();
	}
	else if (state.routerDataObjects.length > 0) {
		state.malls = [];
		state.dataMall = [];
		state.listMalls = [];
		state.statusLoad = true;
		state.temporarilyDataMall = [];
		if (state.statusAnaliticsMethod !== 'control') {
			for (var i = 0; i < action.data.length; i++) {
				var obj = {
					data: action.data[i],
					status: false
				}
				for (var j = 0; j < state.routerDataObjects.length; j++) {
					if (action.data[i].id === state.routerDataObjects[j]) {
						state.dataMall.push(action.data[i]);
						state.listMalls.push(action.data[i]);
						obj = {
							data: action.data[i],
							status: true
						}
					}
				}
				if (obj.status === true) {
					state.temporarilyDataMall.push(obj);
				}
				state.malls.push(obj);
			}
		}
		else if (state.statusAnaliticsMethod === 'control') {
			for (var i = 0; i < action.data.length; i++) {
				var obj = {
					data: action.data[i],
					status: false
				}
				for (var j = 0; j < state.routerDataObjects.length; j++) {
					// console.log('store.jscontrollSelectedFirst', action.data[i].id, state.routerDataObjects);
					if (action.data[i].id === state.routerDataObjects[j]) {
						state.dataMall.push(action.data[i]);
						state.listMalls.push(action.data[i]);
						obj = {
							data: action.data[i],
							status: true
						}
					}
				}
				if (obj.status === true) {
					state.temporarilyDataMall.push(obj);
				}
				state.malls.push(obj);
			}
		}
		state.statusAllSelect = 'average';
		selectedMall();
	}
};

function setStatusShowListMalls() {
	state.statusShowMalls = true;
};

function selectedMall() {
	// console.log('store.jscontroll<<<<<<<<<<<<');
	var domian = document.location.host.split('.');
    var domian2 = domian[domian.length - 2];
    var domian3;
    var backgroundColor;
    if (domian2 === undefined) {
        domian3 = document.location.hostname;
    }
    else if (domian2 !== undefined) {
        domian3 = domian2;
    }
    if (domian3 === 'localhost') {
        backgroundColor = '#45b976';
    }
    else if (domian3 === 'getshopster') {
        backgroundColor = '#ff5c5c';
    }
	state.dataMall = [];
	for (var i = 0; i < state.temporarilyDataMall.length; i++) {
		// console.log('store.jsminDateforfoe',state.temporarilyDataMall[i]);
		if (state.temporarilyDataMall[i].data.hasOwnProperty('name') === true) {
			state.dataMall[i] = state.temporarilyDataMall[i].data;
			// state.search = '';
			// if (state.indexElementOfMalls !== null) {
			// 	state.listMalls[state.indexElementOfMalls] = state.temporarilyDataMall;
			// }
			state.statusShowMalls = false;
		}
	}
	// console.log('store.jscontrollSelectedEnd', state.dataMall);
	// <<<< времено
	var listMalls = [];
    for (var i = 0; i < state.malls.length; i++) {
        if (state.malls[i].status === true) {
            var obj = {
                style: {
                    style: {background: backgroundColor}
                },
                value: state.malls[i]
            }
        }
        else if (state.malls[i].status === false) {
            var obj = {
                style: {
                    style: {background: '#fff',
                			color: '#757575'}
                },
                value: state.malls[i]
            }
        }
        if (state.search === '') {
            obj.indexSearch = 1;
        }
        else if (state.search !== '') {
            var name = state.malls[i].data.name.toLowerCase();
            var search = state.search.toLowerCase();
            obj.indexSearch = name.indexOf(search);
        }
        listMalls.push(obj);
        if (state.search !== '') {
            listMalls = listMalls.sort(function (a, b) {
                if (a.indexSearch > b.indexSearch) {
                    return 1;
                }
                if (a.indexSearch < b.indexSearch) {
                    return -1;
                }
              return 0;
            });
        }
    }
    state.mallsFilter = [];
    state.mallsFilter = listMalls;
    // console.log('store.jscontrollSelectedMalls', state.mallsFilter);
	// <<<< eng
};

function getTemporarilyData(action) {
		// console.log('store.js>>>>>>>>>>>');
	for(var i = 0; i < state.malls.length; i++) {
		// if (action.data.value.id !== state.malls[i].id) {
		// 	state.statusSelectMall[i] = false;
		// }
		// console.log('store.jscontrol', state.temporarilyDataMall, state.dataMall);
		if (state.statusAnaliticsMethod !== 'control') {
			// console.log('store.jscontrol', state.statusAnaliticsMethod);
			var index;
			if (action.data.value.data.id === state.malls[i].data.id) {
				if (state.malls[i].status === true) {
					for (var j = 0; j < state.temporarilyDataMall.length; j++) {
						if (state.temporarilyDataMall[j].data.id === state.malls[i].data.id) {
							index = j;
						}
					}
					// state.statusSelectMall = false;
					state.malls[i].status = false;
					state.temporarilyDataMall.splice(index, 1);
				}
				else if(state.malls[i].status === false) {
					if (state.quantity === null) {
						state.malls[i].status = true;
						// state.statusSelectMall = true;
						var data = {
							data: action.data.value.data,
							status: true
						};
						state.temporarilyDataMall.push(data);
					}
					else if (state.quantity !== null) {
						if (state.temporarilyDataMall.length < state.quantity) {
							state.malls[i].status = true;
							// state.statusSelectMall = true;
							var data = {
								data: action.data.value.data,
								status: true
							};
							state.temporarilyDataMall.push(data);
						}
					}
				}
			}
			if (state.quantity === null) {
				if (state.temporarilyDataMall.length === state.malls.length) {
					state.statusAllSelect = 'on';
					state.statusSelectMall = true;
				}
				else if (state.temporarilyDataMall.length < state.malls.length && state.temporarilyDataMall.length > 0) {
					state.statusAllSelect = 'average';
					state.statusSelectMall = true;
				}
				else if (state.temporarilyDataMall.length === 0) {
					state.statusAllSelect = 'off';
					state.statusSelectMall = false;
				}
			}
			else if (state.quantity !== null) {
				if (state.temporarilyDataMall.length === state.quantity) {
					state.statusAllSelect = 'on';
					state.statusSelectMall = true;
				}
				else if (state.temporarilyDataMall.length < state.quantity && state.temporarilyDataMall.length > 0) {
					state.statusAllSelect = 'average';
					state.statusSelectMall = true;
				}
				else if (state.temporarilyDataMall.length === 0) {
					state.statusAllSelect = 'off';
					state.statusSelectMall = false;
				}
			}
		}
		else if (state.statusAnaliticsMethod === 'control') {
			var index;
			if (action.data.value.data.id === state.malls[i].data.id) {
				state.temporarilyDataMall = [];
				state.dataMall = [];
				if(state.malls[i].status === false) {
					if (state.quantity === null) {
						state.malls[i].status = true;
						var data = {
							data: action.data.value.data,
							status: true
						};
						state.temporarilyDataMall.push(data);
						state.dataMall.push(action.data.value.data);
					}
					else if (state.quantity !== null) {
						if (state.temporarilyDataMall.length < state.quantity) {
							state.malls[i].status = true;
							// state.statusSelectMall = true;
							var data = {
								data: action.data.value.data,
								status: true
							};
							state.temporarilyDataMall.push(data);
							state.dataMall.push(action.data.value.data);
						}
					}
				}
				else if (state.malls[i].status === true) {
					if (state.quantity === null) {
						state.malls[i].status = true;
						var data = {
							data: action.data.value.data,
							status: true
						};
						state.temporarilyDataMall.push(data);
						state.dataMall.push(action.data.value.data);
					}
					else if (state.quantity !== null) {
						if (state.temporarilyDataMall.length < state.quantity) {
							state.malls[i].status = true;
							// state.statusSelectMall = true;
							var data = {
								data: action.data.value.data,
								status: true
							};
							state.temporarilyDataMall.push(data);
							state.dataMall.push(action.data.value.data);
						}
					}

				}
			}
			else if (action.data.value.data.id !== state.malls[i].data.id) {
				state.malls[i].status = false;
			}
			// console.log('store.jscontrol', state.temporarilyDataMall, state.dataMall);
			if (state.quantity === null) {
				if (state.temporarilyDataMall.length === state.malls.length) {
					state.statusAllSelect = 'on';
					state.statusSelectMall = true;
				}
				else if (state.temporarilyDataMall.length < state.malls.length && state.temporarilyDataMall.length > 0) {
					state.statusAllSelect = 'average';
					state.statusSelectMall = true;
				}
				else if (state.temporarilyDataMall.length === 0) {
					state.statusAllSelect = 'off';
					state.statusSelectMall = false;
				}
			}
			else if (state.quantity !== null) {
				if (state.temporarilyDataMall.length === state.quantity) {
					state.statusAllSelect = 'on';
					state.statusSelectMall = true;
				}
				else if (state.temporarilyDataMall.length < state.quantity && state.temporarilyDataMall.length > 0) {
					state.statusAllSelect = 'average';
					state.statusSelectMall = true;
				}
				else if (state.temporarilyDataMall.length === 0) {
					state.statusAllSelect = 'off';
					state.statusSelectMall = false;
				}
			}
		}
	}
	selectedMall();
};

function setSearch(action) {
	state.search = action.data;
	var domian = document.location.host.split('.');
    var domian2 = domian[domian.length - 2];
    var domian3;
    var backgroundColor;
    if (domian2 === undefined) {
        domian3 = document.location.hostname;
    }
    else if (domian2 !== undefined) {
        domian3 = domian2;
    }
    if (domian3 === 'localhost') {
        backgroundColor = '#45b976';
    }
    else if (domian3 === 'getshopster') {
        backgroundColor = '#ff5c5c';
    }
	var listMalls = [];
    for (var i = 0; i < state.malls.length; i++) {
        if (state.malls[i].status === true) {
            var obj = {
                style: {
                    style: {background: backgroundColor}
                },
                value: state.malls[i]
            }
        }
        else if (state.malls[i].status === false) {
            var obj = {
                style: {
                    style: {background: '#fff',
                			color: '#757575'}
                },
                value: state.malls[i]
            }
        }
        if (state.search === '') {
            obj.indexSearch = 1;
        }
        else if (state.search !== '') {
            var name = state.malls[i].data.name.toLowerCase();
            var search = state.search.toLowerCase();
            obj.indexSearch = name.indexOf(search);
        }
        listMalls.push(obj);
        if (state.search !== '') {
            listMalls = listMalls.sort(function (a, b) {
                if (a.indexSearch > b.indexSearch) {
                    return 1;
                }
                if (a.indexSearch < b.indexSearch) {
                    return -1;
                }
              return 0;
            });
        }
    }
    state.mallsFilter = [];
    state.mallsFilter = listMalls;
};

function getStatusShowCalendar(action) {
	state.statusShowCalendar = action.status;
};

function hideCalendar() {
	state.statusShowCalendar = false;	
};

function saveDateMax(action) {
	state.maxDate = action.date.yyyy_mm_dd();
};

function saveDateMin(action) {
	state.minDate = action.date.yyyy_mm_dd();
};

function selectOffMalls() {
	if (state.statusAllSelect !== 'off') {
		for (var i = 0; i < state.malls.length; i++) {
			state.malls[i].status = false;
			state.temporarilyDataMall = [];
			state.dataMall = [];
		}
		state.statusAllSelect = 'off';
	}

	// selectedMall();
};

function selectOnMalls() {
	if (state.statusAllSelect !== 'on') {
		state.temporarilyDataMall = [];
		var data;
		for (var i = 0; i < state.mallsFilter.length; i++) {
			if (state.quantity !== null) {
				if (i >= state.quantity) {
					state.statusAllSelect ='on';
					return;
				}
			}
			// state.mallsFilter;
			for (var j = 0; j < state.malls.length; j++) {
				if (state.mallsFilter[i].value.data.id === state.malls[j].data.id) {
					if (state.mallsFilter[i].indexSearch > -1) {
						state.malls[j].status = true;
						data = {
							data: state.malls[j].data,
							status: true
						};
					}
				}
			}
			if (state.mallsFilter[i].indexSearch > -1) {
				state.temporarilyDataMall.push(data);
				state.dataMall.push(data.data);
			}
			// state.malls[i].status = true;
			// var data = {
			// 	data: state.malls[i].data,
			// 	status: true
			// };
		}
		// console.log('store.js', state.temporarilyDataMall.length, state.mallsFilter.length);
		state.statusAllSelect ='on';	
	}
	// selectedMall();
	// 
	// 
	// 
	// 
	// 
	// 
	// 
	// if (state.statusAllSelect !== 'on') {
	// 	state.temporarilyDataMall = [];
	// 	for (var i = 0; i < state.malls.length; i++) {
	// 		if (state.quantity !== null) {
	// 			if (i >= state.quantity) {
	// 				state.statusAllSelect ='on';
	// 				return;
	// 			}
	// 		}
	// 		state.malls[i].status = true;
	// 		var data = {
	// 			data: state.malls[i].data,
	// 			status: true
	// 		};
	// 		state.temporarilyDataMall.push(data);
	// 		state.dataMall.push(state.malls[i].data);
	// 	}
	// 	state.statusAllSelect ='on';	
	// 	console.log('store.js', state.temporarilyDataMall.length);
	// }
}

function getQuantity(action) {
	state.quantity = action.data;
};

function selectToday() {
	state.maxDate = new Date().yyyy_mm_dd();
	state.minDate = new Date().yyyy_mm_dd();
	state.statusTimeSelect = 'Today';
};

function setLastMonth() {
	state.maxDate = new Date().yyyy_mm_dd();
	state.minDate =  new Date(new Date().getFullYear(), new Date().getMonth() + 1 - 2, new Date().getDate()).yyyy_mm_dd();
	// console.log('store.js', new Date(state.maxDate).yyyy_mm_dd(), state.minDate);
	state.statusTimeSelect = 'Moth';
};

function setLastWeek() {
	state.maxDate = new Date().yyyy_mm_dd();
	state.minDate =  new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 7, new Date().getDate()).yyyy_mm_dd();
	state.statusTimeSelect = 'Week';
};

function setFullTime() {
	state.maxDate = new Date().yyyy_mm_dd();
	state.minDate = new Date("2013-08-30").yyyy_mm_dd();
	state.statusTimeSelect = 'FullTime';
};

function setNameInterval(action) {
	state.nameInterval = action.name;
};

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
	update: function (data) {
		if (data.panelState.maxDate !== undefined) {
			state.maxDate = data.panelState.maxDate;
			state.minDate = data.panelState.minDate;
		}
		// console.log('store.jscontrol',data);
		state.statusAnaliticsMethod = data.stateStaticContent.statusAnaliticsMethod;
		state.routerDataObjects = data.routerDataObjects;
		state.mainState.insetName = data.commonState.insetName;
		state.mainState.selectedObjects = data.commonState.selectedObjects;
		state.mainState.max_timestamp = data.commonState.max_timestamp;
		state.mainState.min_timestamp = data.commonState.min_timestamp;
		// state.maxDate = new Date(action.state.commonState.max_timestamp).yyyymmdd();
		// state.minDate = new Date(action.state.commonState.min_timestamp).yyyymmdd();
		state.mainState.password = data.commonState.password;
		state.mainState.token = data.commonState.token;
		state.mainState.username = data.commonState.username;
		state.mainState.commonState = data.commonState.username;
		state.dataMall = data.panelState.dataMall;
		// state.temporarilyDataMall = data.panelState.dataMall
		if (data.panelState.malls !== undefined) {
			if (data.indexDelete !== null) {
				// state.deleteObjects;
				for (var j = 0; j < state.temporarilyDataMall.length; j++) {
					// console.log('store.jscontrol', state.temporarilyDataMall[j].data.id, data.deleteObjects.data.id);
					if (state.temporarilyDataMall[j].data.id === data.deleteObjects.data.id) {
						state.temporarilyDataMall.splice(j, 1);
					}
					// if ()
				}
			}
			else if(data.indexDelete === null) {
				state.temporarilyDataMall = [];
				var dataTemporarily = [];
				// console.log('store.jscontroll', state.dataMall);
				for (var j = 0; j < state.dataMall.length; j++) {
					var obj = {
						data: state.dataMall[j],
						status: true
					};
					state.temporarilyDataMall.push(obj);
				}
			}
			state.malls = data.panelState.malls;
			for(var i = 0; i < state.malls.length; i++) {
				if (state.quantity === null) {
					if (state.temporarilyDataMall.length === state.malls.length) {
						state.statusAllSelect = 'on';
						state.statusSelectMall = true;
					}
					else if (state.temporarilyDataMall.length < state.malls.length && state.temporarilyDataMall.length > 0) {
						state.statusAllSelect = 'average';
						state.statusSelectMall = true;
					}
					else if (state.temporarilyDataMall.length === 0) {
						state.statusAllSelect = 'off';
						state.statusSelectMall = false;
					}
				}
				else if (state.quantity !== null) {
					if (state.temporarilyDataMall.length === state.quantity) {
						state.statusAllSelect = 'on';
						state.statusSelectMall = true;
					}
					else if (state.temporarilyDataMall.length < state.quantity && state.temporarilyDataMall.length > 0) {
						state.statusAllSelect = 'average';
						state.statusSelectMall = true;
					}
					else if (state.temporarilyDataMall.length === 0) {
						state.statusAllSelect = 'off';
						state.statusSelectMall = false;
					}
				}
			}
		}
		// console.log('store.jscontrol', state.temporarilyDataMall);
		selectedMall();
		this.emitChangeToModuleListeners();
	},
	selectStatusLoadFalse: function () {
		state.statusLoad = false;
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
    		case AppConstants.UPDATE:
			return update;
			case AppConstants.GET_MALLS_LIST:
			return getMallsList;
			case AppConstants.SHOW_LIST_MALLS:
			return setStatusShowListMalls;
			case AppConstants.SELECTED_MALL:
			return selectedMall;
			case AppConstants.GET_SELECT_MALL:
			return getTemporarilyData;
			case AppConstants.GET_SEARCH:
			return setSearch;
			case AppConstants.SET_STATUS_SHOW_CALENDAR:
			return getStatusShowCalendar;
			case AppConstants.HIDE_CALENDAR:
			return hideCalendar;
			case AppConstants.GET_DATE_MAX:
			return saveDateMax;
			case AppConstants.GET_DATE_MIN:
			return saveDateMin;
			case AppConstants.SELECT_OFF_MALLS:
			return selectOffMalls;
			case AppConstants.SELECT_ON_MALLS:
			return selectOnMalls;
			case AppConstants.GET_QUANTITY:
			return getQuantity;
			case AppConstants.SELECT_TODAY:
			return selectToday;
			case AppConstants.SELECT_LAST_MONTH:
			return setLastMonth;
			case AppConstants.SELECT_LAST_WEEK:
			return setLastWeek;
			case AppConstants.SELECT_FULL_TIME:
			return setFullTime;
			case AppConstants.SELECT_INTERVAL:
			return setNameInterval;
			case AppConstants.SELECT_STATUS_LOAD_FALSE:
			return selectStatusLoadFalse;
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