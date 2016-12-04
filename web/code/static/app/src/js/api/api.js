

var $ = require('jquery');

var Api = {
	urls: {
		about: '/api/content/list/AboutCompany/',
		workItem: '/api/content/list/WorkItem/',
		news: '/api/content/list/News/',
		comments: '/api/content/list/Comment/',
        indicator: '/api/content/list/KeyIndicator/'
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
	getRequestHeaders: function (params ,url, success, error) {
		$.ajax({
			url: url,
            type: 'GET',
			success: function(data) {
            	success(params ,data);
	        }.bind(this),
	        error: function(xhr, status, err) {
	            // error(err);
	            console.error(err);
	        }.bind(this)
		});
	},
	getData: function (success, error) {
        this.getRequestHeaders('about', this.urls.about, success,error);
        this.getRequestHeaders('comments', this.urls.comments, success,error);
        this.getRequestHeaders('news', this.urls.news, success,error);
        this.getRequestHeaders('work' ,this.urls.workItem, success,error);
        this.getRequestHeaders('indicator' ,this.urls.indicator, success,error);
	}
};

module.exports = Api;
          



