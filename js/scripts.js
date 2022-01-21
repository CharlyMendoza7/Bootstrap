$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else{ 
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $('#reserveTableButton').click(function(){
        $('#reserveTableModal').modal('show');
    });
    $('#reserveTableDismiss').click(function() {
        $('#reserveTableModal').modal('hide');
    });
    $('#cancelReserve').click(function(){
        $('#reserveTableModal').modal('hide');
    });


    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });
    $('#loginDismiss').click(function() {
        $('#loginModal').modal('hide');
    });
    $('#cancelLogin').click(function(){
        $('#loginModal').modal('hide');
    });
});