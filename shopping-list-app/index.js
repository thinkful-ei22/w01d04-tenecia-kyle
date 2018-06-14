'use strict';

function main() {

  const listItemCreator = function(str) {

    return `<li>
    <span class="shopping-item">${str}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`;
  };


// listener for entry form
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const userInput = $('.js-shopping-list-entry').val();

    // clear input val
    $('.js-shopping-list-entry').val('');

    // add new item to list
    $('.shopping-list').append(listItemCreator(userInput));
  });


// check button to cross off text
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });


// delete button to remove item
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

}

$(main);