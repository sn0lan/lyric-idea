define([
	'jquery', 
	'underscore', 
	'backbone',
	'collections/LyricCollection',
	'text!templates/lyricSearchResultsTemplate.html'
], function($, _, Backbone, LyricCollection, lyricSearchResultsTemplate){
	var LyricSearch = Backbone.View.extend({

		el: $('.lyric-search'),
		searched: $('.lyric-search-results'),
		template: _.template(lyricSearchResultsTemplate),
			
		events:{
			'click .search-btn' : 'search',
		},		

		initialize: function(){
			var search = this;
		},

		render: function(){
			//check to see if exists to stop errors
			if(this.collection){
				//Output search results
				this.searched.html(this.template({ lyricSearchResults: this.collection.models[0].attributes.data }));
			}
		},
		
		search: function(e){
			e.preventDefault();		
			var search = this;
			var searchInput = search.$el[0].children[1].value;

			var onDataHandler = function(collection, items){
				search.render();			
			}

			search.collection = new LyricCollection([], searchInput);
			search.collection.fetch({
				error: function(){
					console.log('Something aint working');
				},
				success: onDataHandler, 
				dataType: 'json'
			});

		}

	});

	return LyricSearch;
});
