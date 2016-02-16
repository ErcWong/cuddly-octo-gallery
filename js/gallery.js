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

//function loadHeaderAndFooter(page) {
//    var path = (page=='Home' ? '':'../');
//    $('header').load(path + 'header.html', function() {
//        $('li:contains(' + page + ')').first().addClass('active');
//    });
//    $('footer').load(path + 'footer.html');
//}
