Lungo.Events.init({
		'load section#carousel': function(event) {
				var el = $$('[data-control=carousel]')[0];
        App.carousel = Lungo.Element.Carousel(el, function(index, element) {
            Lungo.dom("section#carousel .title span").html(index + 1);
        });
    },    
    'tap section#carousel > header#left':  
    	App.carousel.prev,

    'tap section#carousel > header#right': 
    	App.carousel.next
});