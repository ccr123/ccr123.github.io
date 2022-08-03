$(document).ready(function(){

    // change day and night
   $('.day-night-toggler img').on('click',function(){
       $('img').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('moon')){
            console.log('moon');
            $('body').find('.text-black').removeClass('text-black').addClass('text-white');
            $('body').find('.navbar').addClass('navbar-dark bg-dark');
            $('body').addClass('bg-dark');
        }
        if($(this).hasClass('sun')){
            console.log('sun');
            $('body').find('.text-white').removeClass('text-white').addClass('text-black');
            $('body').find('.navbar').removeClass('navbar-dark bg-dark');
            $('body').removeClass('bg-dark');
        }
   })


})