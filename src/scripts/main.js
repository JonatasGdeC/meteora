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

// Programação modal 1
$('#form--contact').submit(function(e){
    e.preventDefault();
    const modal = $('.modal');
    const mensagemSucesso = $('.modal__email');
    const input = $('.contact__section__form__input');

    var sEmail	= $(".contact__section__form__input").val();
    var emailFilter=/^.+@.+\..{2,}$/;
    var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/

    if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
        input.addClass('contact__section__form__input--is-error')
    } else{
        input.removeClass('contact__section__form__input--is-error')
        modal.css({display:'block'})
        mensagemSucesso.css({display:'block'})
    }
})

// Programação modal 2
const botaoVerMais = document.querySelectorAll('#btn--ver-mais')
const modal = document.querySelector('.modal')
const detalhesProduto = document.querySelector('.modal__product')

for(let i = 0; i<botaoVerMais.length; i++){
    botaoVerMais[i].addEventListener('click', function(){
        modal.style.display = 'block';
        detalhesProduto.style.display = 'block';
    })
}

// Programação botão fechar modal
$('#button--close').click(function(){
    const modal = $('.modal');
    const mensagemSucesso = $('.modal__email');
    const detalhesProduto = $('.modal__product')
    const input = $('.contact__section__form__input');

    input.val('');
    modal.css({display:'none'})
    mensagemSucesso.css({display:'none'})
    detalhesProduto.css({display: 'none'})
})




