$(function(){


var altura = $(window).height();   // altura do browser
var largura = $(window).width();   // comprimento do browser

console.log(largura);
var btnEnvolva = $(".btnEnvolva"); // Botão de Envolva-se no Header
var tempoBotao = 3000; // Tempo em que o botão muda de cor.

var tempoHomeAnimacao = 10000; // Tempo em que o HomeSkew muda de cor junto com o blend
var HomeAnimacao = $(".HomeAnimacao"); // Classe que junta o HomeSkew e o Blend para mudarem de cores juntos e iguais

var emWeb = '-2.7em'; //Altura do header na Web
var emMobile = '-2.6em'; //Altura do header no mobile
var emNavMobileTOPO = '7.2em'; // Altura do nav no mobile quando está colocado no topo
var emNavMobileScroll = '4.5em'; // Altura do nav no mobile quando aciona o scroll

trocaCor(btnEnvolva, tempoBotao);
trocaCor(HomeAnimacao, tempoHomeAnimacao);
menuAtivo();
fechaMenu();
// movimentaSkew();




if (largura > 1024) 
{  
  // Se a largura do navegador for maior que 1024px, o header a altura da web
  menuRotativo(emWeb);
}else 
{
  // Se a largura do navegador for menor que 1024px, o header a altura do mobile
  menuRotativo(emMobile,emNavMobileTOPO,emNavMobileScroll);
}    


});


function menuAtivo() {
  $(".menu-abrir").on("click", function() {
    document.documentElement.classList.add('menu-ativo')
  })
}

function fechaMenu() {
  $(".menu-fechar").on("click", function() {
    document.documentElement.classList.remove('menu-ativo')
  });
}


function trocaCor(variavel, tempo)

 // Essa função troca as cores dentro de um array.
{
  setInterval(function()
  {
    var cores = 
    [
    "#AA7CC4",
    "#6F2222",
    "#D53A0A",
    ]

// array de cores

    for (var i = 0; i <= cores.length; i++) 
    {

     variavel.css('background-color', cores[Math.floor(Math.random()*cores.length)]);
   }
 }, tempo);

}
// function movimentaSkew()
// {

//   var contador = 1;

//   setInterval(function(){

//     contador++;

//     if (contador == 9)
//     {
//       $(".HomeSkew").css('margin-left', '3.65em');
//     }
//     if(contador == 12)
//     {
//       $(".HomeSkew").css('margin-left', '-11em');
//       contador = 1;
//     }

//   }, 1000);

// }



function menuRotativo(em, em1, em2)
{

  $(window).scroll(function() 
  {
    if ($(this).scrollTop() < 14) 
    {
      $(".header-principal").css('margin-top', '0em');
      $(".SubMenu").css('margin-top', '0em');
      $(".Sub2").css('margin-top', '6.9em');
      $(".menu-ativo .navbar").css('margin-top', em1);
    }else 
    {
      $(".header-principal").css('margin-top', em);
      $(".SubMenu").css('margin-top', '-2.9em');
      $(".Sub2").css('margin-top', '4.2em');
      $(".menu-ativo .navbar").css('margin-top', em2);

    }
  });

}