'use strict';

const main = function() {
  // when thumbnails are clicked on pass in the anchor tag
  $('.thumbnails').on('click', 'a', function(event) {
    // create a variable with the 'src' of the img clicked on
    const source = $(this).find('img').attr('src');

    // create a variable with the 'alt' of the img clicked on
    const alt = $(this).find('img').attr('alt');
    
    // update the hero img & alt text with our variables
    $('.hero img').attr('src', source).attr('alt', alt);
  });
};


$(main());