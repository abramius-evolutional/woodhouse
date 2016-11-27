

var $ = require('jquery');

var Api = {
	internalState: {
		state: null,
		floors: null,
		headers: {},
		idMall: null,
		maxTime: null,
		minTime: null, 
		requestHeaders: null
	},
	constantUrl: {
		mall: {
			root: 'https://api-v2.getshopster.com/mall'
		}
		// mall: {
		// 	root: 'https://api.getshopster.com/v1/mall?mall_id=',
		// 	username: '&username=',
		// 	password: '&password='
		// }
	},
	getRequest: function (id, url, success, error) {
		var data;
		$.ajax({
			url: url,
			data: data,
			success: function(data) {
				if (this.internalState.idMall == null || this.internalState.idMall == id) {
					success(data);
				}
	        }.bind(this),
	        error: function(xhr, status, err) {
	            error(err);
	            console.error(err);
	        }.bind(this)
		});
	},
	getRequestHeaders: function (state, url, success, error) {
		// if (this.internalState.requestHeaders != null) {
		// 		this.internalState.requestHeaders.abort();
		// 		// this.internalState.requestHeaders = null;
		// 	}
		var data;
		this.internalState.requestHeaders = $.ajax({
			url: url,
			headers:  this.internalState.headers,
			data: data,
			success: function(data) {
				this.internalState.minTime = state.min_timestamp;
            	success(data);
            	this.internalState.requestHeaders = null;
	        }.bind(this),
	        error: function(xhr, status, err) {
	            // error(err);
	            console.error(err);
	        }.bind(this)
		});
	},
	getMallsList: function (state, success, error) {
		this.internalState.idMall = state.selectedObjects;
		this.internalState.maxTime = state.max_timestamp;
		this.internalState.minTime = state.min_timestamp;
		this.internalState.headers = state;
		// this.internalState.headers['x-token'] = state.token;	
		// this.internalState.headers['x-username'] = state.username;
		var username = encodeURIComponent(state.username);
		var password = encodeURIComponent(state.password);
		var url = this.constantUrl.mall.root;
		if (state['x-token'] !== undefined && state['x-username'] !== undefined) {
			this.getRequestHeaders(state, url, success, error);
		}
	}
};

module.exports = Api;
          



