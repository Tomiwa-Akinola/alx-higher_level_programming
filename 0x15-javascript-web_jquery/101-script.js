// adds, remove, and clears LI from <li> when user clicks

$(document).ready(function() {
    $("#add_item").click(function() {
        $(".my_list").append("<li>Item</li>");
    });

    $("#remove_item").click(function() {
        $(".my_list li:last").remove();
    });

    $("#clear_list").click(function() {
        $(".my_list").empty();
    });
});
