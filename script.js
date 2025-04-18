$(document).ready(function() {
    $('.images-carousel').slick({
        autoplay: true,
        autoplaySpeed: 1400
    }); 
    $('.menu-hamburguer').click(() => {
        $('nav').slideToggle(350);
    });
    
});