define([
	'jquery', 
	'underscore', 
	'backbone',
	'models/LyricModel'
], function($, _, Backbone, LyricModel){
	
	var LyricCollection = Backbone.Collection.extend({
		model: LyricModel, 
		initialize: function(models, searchInput){
			this.searchInput = searchInput.replace(/\s/g, '%20');
		},
		url: function(){
			return 'http://api.lyricsnmusic.com/songs?lyrics='+this.searchInput+'&callback=?'
		},
		parse: function(response){ return response },
	});
	
	return LyricCollection;
})
