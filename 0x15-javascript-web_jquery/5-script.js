// Adds an LI element to the list when user clicks div#add_item

$('div#add_item').click(function () {
    let element = '<li>Item</li>';
    $('ul.my_list').append(element);
  });

