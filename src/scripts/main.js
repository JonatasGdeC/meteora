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
