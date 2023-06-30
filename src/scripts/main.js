//Efeito de scrooll
AOS.init();

// Efeito click:
// Menu
const movimentoIR = [
    {transform: "translateX(300px)"},
    {transform: "translateX(0px)"},
]
const movimentoVOLTAR = [
    {transform: "translateX(0px)"},
    {transform: "translateX(300px)"},
]
// Cards e email cadastrado
const verMais =[
    {transform: "scale(0)"},
    {transform: "scale(1)"},
]

const verMenos =[
    {transform: "scale(1)"},
    {transform: "scale(0)"},
]

const tempoEvento = {
    duration: 200,
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
    listaMenuMobile.animate(movimentoVOLTAR, tempoEvento).addEventListener('finish', ()=>{
        listaMenuMobile.style.display = 'none'
    })
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
        mensagemSucesso.animate(verMenos, tempoEvento).addEventListener('finish', ()=>{
            mensagemSucesso.style.display = 'none';
            modal.style.display = 'none';
            inputParaNovidades.value = '';
        })
        
        detalhesProduto.animate(verMenos, tempoEvento).addEventListener('finish', ()=>{
            detalhesProduto.style.display = 'none';
            modal.style.display = 'none';
        })
    })
}



    








