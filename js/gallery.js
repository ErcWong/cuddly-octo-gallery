//$(function ()
//{
//    $.address.strict(false);
//    $.address.externalChange(function(e)
//    {
//        switchTo(e.value);
//    });
//
//    $("#lnk_prev").click(function(e)
//    {
//        e.preventDefault();
//        var i = $("#number").text() * 1 - 1;
//        switchTo(i);
//        $.address.value(i);
//    });
//
//    $("#lnk_next").click(function(e)
//    {
//        e.preventDefault();
//        var i = $("#number").text() * 1 + 1;
//        switchTo(i);
//        $.address.value(i);
//    });
//});
//
//function switchTo(i)
//{
//    $("#number").text(i);
//    $.address.title(i);
//}