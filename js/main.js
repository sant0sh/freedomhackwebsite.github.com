$(".jumper").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);

});
$(window).scroll(function(){
var threshold = 100;
var scrolledDist = $(window).scrollTop();
if(scrolledDist>threshold){
$('#up').addClass('active');}
else{
$('#up').removeClass('active');
}
});

$('#up').on('click',function(){
$("html,body").animate({scrollTop:0},600);
return false;
});
