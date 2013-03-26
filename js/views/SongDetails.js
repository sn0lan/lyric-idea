define([
	'jquery', 
	'underscore', 
	'backbone',
	'collections/SongCollection',
	'text!templates/songTemplate.html'
], function($, _, Backbone, SongCollection, songTemplate){
	var SongDetails = Backbone.View.extend({

		el: $('.lyric-search-results'),
		
		events:{
			'click .song' : 'songDetails',
		},

		initialize: function(){
			var song = this;
		},

		songDetails: function(e){
			e.preventDefault();
			console.log('test');
		}

	});

	return SongDetails;
});

