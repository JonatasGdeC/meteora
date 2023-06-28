//Efeito de scrooll
AOS.init();
// Efeito click
const movimentoIR = [
    {transform: "translateX(300px)"},
    {transform: "translateX(0px)"},
]

const verMais =[
    {transform: "scale(0)"},
    {transform: "scale(1)"},
]

const tempoEvento = {
    duration: 300,
    iterations: 1,
}


//Programação para menu hamburguer
const menuHamburguer = document.getElementById('menu--burguer');
const listaMenuMobile = document.getElementById('menu--mobile');
const menuFechar = document.getElementById('menu--close');

menuHamburguer.addEventListener('click', function(){
    listaMenuMobile.style.display = 'block';
    listaMenuMobile.animate(movimentoIR, tempoEvento)
})

menuFechar.addEventListener('click', function(){
    listaMenuMobile.style.display = 'none';
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

// Constantes Modal
const modal = document.querySelector('.modal');
const detalhesProduto = document.querySelector('.modal__product');
const mensagemSucesso = document.querySelector('.modal__email');

// Programação modal 1
const formNovidades = document.querySelector('#form--contact');
const inputParaNovidades = document.querySelector('.contact__section__form__input');

formNovidades.addEventListener('submit',function(e){
    e.preventDefault();
    var sEmail = document.querySelector('.contact__section__form__input').value;
    var emailFilter=/^.+@.+\..{2,}$/;
    var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;

    if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
        inputParaNovidades.classList.add('contact__section__form__input--is-error');
    } else{
        inputParaNovidades.classList.remove('contact__section__form__input--is-error');
        modal.style.display = 'block';
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.animate(verMais, tempoEvento)
    }
})

// Programação modal 2
const botaoVerMais = document.querySelectorAll('#btn--ver-mais')

for(let i = 0; i<botaoVerMais.length; i++){
    botaoVerMais[i].addEventListener('click', function(){
        modal.style.display = 'block';
        detalhesProduto.style.display = 'block';
        detalhesProduto.animate(verMais, tempoEvento)
    })
}

// Programação botão fechar modal
const btnClose = document.querySelectorAll('#button--close')
for (let i = 0; i<btnClose.length; i++){
    btnClose[i].addEventListener('click', function(){
    const modal = document.querySelector('.modal')
    const mensagemSucesso = document.querySelector('.modal__email')
    const detalhesProduto = document.querySelector('.modal__product')

    mensagemSucesso.style.display = 'none';
    detalhesProduto.style.display = 'none';
    modal.style.display = 'none';
    })
}



    








