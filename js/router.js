define([
	'jquery', 
	'underscore', 
	'backbone', 
	'views/LyricSearch'
	
], function($, _, Backkbone, LyricSearch){
	var AppRouter = Backbone.Router.extend({
		routes: {
			'*actions' : 'defaultAction'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;

		app_router.on('route:defaultAction', function(){
			var lyricSearchView = new LyricSearch();
			lyricSearchView.render();
		});

		Backbone.history.start({pushState: true });
	};

	return{ initialize: initialize };
});
