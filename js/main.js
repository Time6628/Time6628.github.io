var main = function() {
    $('.box1, .box2, .box3, .box4, .box5, .box6').hover(function() {
        $(this).fadeTo("slow", 1);
    }, function() {
        $(this).fadeTo("slow", .5);
    });
};
$(document).ready(main);