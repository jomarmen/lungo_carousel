var el = $$('[data-control=carousel]')[0];
carousel = Lungo.Element.Carousel(el, function(index, element) {    
    //alert("Position: " + index);
});

Lungo.Events.init({
    'tap section#carousel > article a[data-direction="left"]': function(){
        carousel.prev();

    },
    'tap section#carousel > article a[data-direction="right"]': function(){
        carousel.next();
    }
});

