$(function () {
	Cast.getActors();
})

var Cast = {
	getActors: function() {
		$.ajax( {
			url: '/films/cast', 
			type: 'GET', 
			dataType: 'json',
			success: function(films) {
				console.log(films);
				Cast.plotFilms(films);
			}
		});
	},

	
	

	plotFilms: function(films) {
		var h = 600, 
				w = 1200, 
				dataLength = films.length, 
				barWidth = w/dataLength, 
				svg = d3.select('#cast_svg')
					.append('svg')
					.attr('height', h)
					.attr('width', w)
					.style('border', '2px solid black');
		
				height = d3.scale
								.linear
								.domain([0, 3])
								.range([0, h]),
				color = d3.scale
                .ordinal()
                .domain(["1", "2", "3"])
                .range(["#FF7F00", "#F5F732", "#42A87A"]);
		svg.selectAll('rect')
			.data(films)
			.enter()
			.append('rect')
			.attr('x', function(data, index) {
				return w/dataLength * index;
			})
			.attr('height', function(data, index) {
				return height(data.bechdel_rating);
			})
			.attr('width', barWidth)
			.attr('y', function(data, index){
				return h - height(data.bechdel_rating);
			})
			.attr("fill"), function(d, index){
				return color(d.bechdel_rating);
			}

	}














}