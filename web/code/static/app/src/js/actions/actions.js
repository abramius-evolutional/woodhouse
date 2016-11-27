var AppDispatcher = require('../dispatcher/dispatcher.js');
var AppConstants = require('../constants/constants.js');
var AppStores = require('../stores/store.js');
var Api = require('../api/api.js');

var stateJSON = 0;
var stateDataUpdate = 0;
var stateStatus = 0;

function setCommonStateStore(state) {
    if (JSON.stringify(state) !== stateJSON) {
        ControlPanelActions.update(state);
        stateJSON = JSON.stringify(state);
    }
}

var Action = {
	update: function (state) {
		// AppDispatcher.handleViewAction({
		// 	actionType:AppConstants.UPDATE,
		// 	state: state
		// })
		// Action.getMallsList(state.commonState);
		// AppDispatcher.handleViewAction({
		// 	actionType:AppConstants.UPDATE,
		// 	state: state
		// }
		// console.log('actions.js', state);
		if (state.statusLeftPanel !== null) {
			var dataStatus = {
				status: state.statusLeftPanel.statusShowPanelOfObjects,
				dataTab: state.stateStaticContent.dataTab
			};
			var dataState = {
				headers: state.headers
			};
			// var stateDataUpdate = 
			// console.log('actions.js>', state);
			if (JSON.stringify(dataStatus) !== stateStatus) {
				// console.log('actions.js', state);
				AppStores.update(state);
				stateStatus = JSON.stringify(dataStatus);
			}
			if (JSON.stringify(state.panelState) !== stateDataUpdate) {
				AppStores.update(state);
				stateDataUpdate = JSON.stringify(state.panelState);
			}
			if (JSON.stringify(dataState) !== stateJSON) {
				if (state.statusLogin === 'SUCCESS') {
					// console.log('actions.js>>>>', state.statusLeftPanel.dataTab);
					Action.getMallsList(state.headers);
				}
				// console.log('actions.js', state.headers, state.statusLeftPanel.dataTab);
		        // AppStores.update(state);
		        stateJSON = JSON.stringify(dataState);
		    }
		}
		if (state.statusLogin === 'SUCCESS') {
			// if (state.statusLeftPanel !== null) {
			// 	var dataStatus = {
			// 		status: state.statusLeftPanel.statusShowPanelOfObjects
			// 	};
			// 	var dataState = {
			// 		headers: state.headers,
			// 		tabs: state.statusLeftPanel.dataTab
			// 	};
			// 	// var stateDataUpdate = 
			// 	// console.log('actions.js>', state);
			// 	if (JSON.stringify(dataStatus) !== stateStatus) {
			// 		AppStores.update(state);
			// 		stateStatus = JSON.stringify(dataStatus);
			// 	}
			// 	if (JSON.stringify(state.panelState) !== stateDataUpdate) {
			// 		AppStores.update(state);
			// 		stateDataUpdate = JSON.stringify(state.panelState);
			// 	}
			// 	if (JSON.stringify(dataState) !== stateJSON) {
			// 		// console.log('actions.js', state.headers, state.statusLeftPanel.dataTab);
			//         // AppStores.update(state);
			//         // console.log('actions.js>>>>', state);
			// 		Action.getMallsList(state.headers);
			//         stateJSON = JSON.stringify(dataState);
			//     }
			// }
			if (state.commonState.insetName !== undefined) {
				// console.log('actions.js>>');
				if (AppStores.getState().mainState.hasOwnProperty('commonState') === false) {
					AppDispatcher.handleViewAction({
						actionType:AppConstants.UPDATE,
						state: state
					})
					Action.getMallsList(state.headers);
				}
				else if (AppStores.getState().mainState.commonState !== null && AppStores.getState().mainState.max_timestamp !== undefined && AppStores.getState().mainState.min_timestamp !== undefined) {
					// console.log('actions.js>>');
					if (AppStores.getState().mainState.max_timestamp !== state.commonState.max_timestamp) {
						AppDispatcher.handleViewAction({
							actionType:AppConstants.UPDATE,
							state: state
						})
						Action.getMallsList(state.commonState);
					}
					if (AppStores.getState().mainState.min_timestamp !== state.commonState.min_timestamp) {
						AppDispatcher.handleViewAction({
							actionType:AppConstants.UPDATE,
							state: state
						})
						Action.getMallsList(state.headers);
					}
					if (AppStores.getState().mainState.selectedObjects !== state.commonState.selectedObjects) {
						AppDispatcher.handleViewAction({
							actionType:AppConstants.UPDATE,
							state: state
						})
						Action.getMallsList(state.headers);
					}
					if (state.commonState.insetName !== AppStores.getState().mainState.insetName) {
						AppDispatcher.handleViewAction({
							actionType:AppConstants.UPDATE,
							state: state
						})
					}
				}
			}
		}
	},
	getMallsList: function(state) {
		// console.log('actions.jsControlPanel', state);
		// AppDispatcher.handleViewAction({
		// 	actionType:AppConstants.SELECT_STATUS_LOAD_FALSE
		// });
		AppStores.selectStatusLoadFalse();
		Api.getMallsList(state,
			function (data) {
				AppDispatcher.handleViewAction({
					actionType:AppConstants.GET_MALLS_LIST,
					data: data
				})
			},
			function (err) {
				console.error(err);
			}
		);
	},
	showListMalls: function() {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SHOW_LIST_MALLS
		})
	},
	selectedMall: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SELECTED_MALL
		})
	},
	getSelectMall: function (data) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_SELECT_MALL,
			data: data
		})
	},
	getSearch: function (data) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_SEARCH,
			data: data
		})
	},
	setStatusShowCalendar: function (status) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SET_STATUS_SHOW_CALENDAR,
			status: status
		})
	},
	hideCalendar: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.HIDE_CALENDAR
		})
	},
	getMaxDate: function (date) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_DATE_MAX,
			date: date
		})
	},
	getMinDate: function (date) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_DATE_MIN,
			date: date
		})
	},
	selectOnMalls: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SELECT_ON_MALLS
		})
	},
	selectOffMalls: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SELECT_OFF_MALLS
		})
	},
	getQuantity: function (data) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_QUANTITY,
			data: data
		})
	},
	selectToday: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SELECT_TODAY
		})
	},
	selectLastMonth: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SELECT_LAST_MONTH
		})
	},
	selectLastWeek: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SELECT_LAST_WEEK
		})
	},
	selectFullTime: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SELECT_FULL_TIME
		})
	},
	selectInterval: function (name) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SELECT_INTERVAL,
			name: name
		})
	}
}



module.exports = Action;