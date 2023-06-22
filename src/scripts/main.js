//Efeito de scrooll
AOS.init();

//Programação para menu hamburguer
const menuHamburguer = $('#menu--burguer')
const listaMenuMobile = $('#menu--mobile')
const menuFechar = $('#menu--close')

menuHamburguer.click(function(){
    $('#menu--mobile').slideToggle()
})
menuFechar.click(function(){
    $('#menu--mobile').slideToggle()
})

//Programação para Carrousel de Banners
$('.banner__desktop').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
});

$('.banner__tablet').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
});

$('.banner__mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
});




