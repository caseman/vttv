
var selectedCategory = null;
var businesses = [];

function loadData(data) {
    businesses = data;
}

function populateDirectory() {
    var b, el;
    var dirEl = $('.directory');
    var tmpl = $('.business-template');
    for (var i = 0; i < businesses.length; i++) {
        b = businesses[i];
        el = tmpl.clone();
        el.find('.fn')
            .text(b[0])
            .attr('href', b[1]);
        el.find('.street-address').text(b[2]);
        el.find('.locality').text(b[3]);
        el.find('.tel').text(b[4]);
        el.addClass('category-' + b[5].toLowerCase());
        el.removeClass('business-template');
        dirEl.append(el);
    }
}

$(document).ready(function(){
    $('.category').click(function(ev) {
        var category = $(this).attr('href').substring(1);
        $('.category').removeClass('category-selected');
        $(this).addClass('category-selected');
        $('.business').hide();
        var matches = $('.category-' + category);
        if (matches.length) { 
            $('.empty-message').hide();
            matches.show();
        } else {
            $('.empty-message').show();
        }
    });
    populateDirectory();
})
