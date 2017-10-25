(function ($) {
	"use strict";

    jQuery(document).ready(function($){

 
        $("#client-testimonial-carousel").owlCarousel({
           
            items : 3,
            margin : 30,
            nav : false,
            dots : true,
            loop : true,
            autoplay : true,
            responsiveClass: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	