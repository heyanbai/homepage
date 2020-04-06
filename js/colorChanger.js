$(document).ready(function () {
    var select = $('.color-changer');
    function changeColor() {
        select.animate({'color':"#EF5350"},"slow");
        select.animate({'border-color':"#EF5350"},"slow");
        select.animate({'color':"#F06292"},"slow");
        select.animate({'border-color':"#F06292"},"slow");
        select.animate({'color':'#BA68C8'},"slow");
        select.animate({'border-color':'#BA68C8'},"slow");
        select.animate({'color':'#9575CD'},"slow");
        select.animate({'border-color':'#9575CD'},"slow");
        select.animate({'color':'#5C6BC0'},"slow");
        select.animate({'border-color':'#5C6BC0'},"slow");
        select.animate({'color':'#29B6F6'},"slow");
        select.animate({'border-color':'#29B6F6'},"slow");
        select.animate({'color':'#26C6DA'},"slow");
        select.animate({'border-color':'#26C6DA'},"slow");
        select.animate({'color':'#26A69A'},"slow");
        select.animate({'border-color':'#26A69A'},"slow");
        select.animate({'color':'#9CCC65'},"slow");
        select.animate({'border-color':'#9CCC65'},"slow");
        select.animate({'color':'#D4E157'},"slow");
        select.animate({'border-color':'#D4E157'},"slow");
        select.animate({'color':'#F57F17'},"slow");
        select.animate({'border-color':'#F57F17'},"slow");
        select.animate({'color':'#FFCA28'},"slow");
        select.animate({'border-color':'#FFCA28'},"slow");
        select.animate({'color':'#FF7043'},"slow");
        select.animate({'border-color':'#FF7043'},"slow");
        select.animate({'color':'#8D6E63'},"slow");
        select.animate({'border-color':'#8D6E63'},"slow");
        select.animate({'color':'#78909C'},"slow");
        select.animate({'border-color':'#78909C'},"slow");
    }
    setInterval(changeColor,0);
});