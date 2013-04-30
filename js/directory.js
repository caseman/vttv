
var selectedCategory = null;
var businesses = [];

function cmp(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
}

function loadData(data) {
    businesses = data.sort(function(a, b) {
        return cmp(a[5], b[5]) || cmp(a[6] || '', b[6] || '') || cmp(a[0], b[0]);
    });
}

function populateDirectory() {
    var b, el, subCat, lastSubCat;
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
        if (b[6] != lastSubCat) {
            subCat = el.find('.subcategory');
            subCat.text(b[6] || '');
            subCat.removeClass('hidden');
            lastSubCat = b[6];
        }
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
