var el = $$('[data-control=carousel]')[0];
carousel = Lungo.Element.Carousel(el, function(index, element) {
    Lungo.dom("section#carousel .title span").html(index + 1);
});

Lungo.Events.init({
    'tap section#carousel > header a[data-direction="left"]': function(){
        //carousel.prev;
        alert("1");
    },
    'tap section#carousel > header a[data-direction="right"]': function(){
        //carousel.next;
        alert("2");
    }
});
