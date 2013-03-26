define([
	'jquery', 
	'underscore', 
	'backbone',
	'models/SongModel'
], function($, _, Backbone, SongModel){
	
	var SongCollection = Backbone.Collection.extend({
		model: SongModel, 
		initialize: function(models, artist, trackName){
			this.artist = artist.replace(/\s/g, '%20');
			this.trackName = trackName.replace(/\s/g, '%20');
		},
		url: function(){
			return 'http://ws.spotify.com/search/1/track?q='+this.artist+'+'+this.trackName+'&callback=?'
		},
		parse: function(response){ return response },
	});
	
	return SongCollection;
})
