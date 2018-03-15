

var app = angular.module("mirimAPP" , ['ngRoute']);


app.service('MovimentaSkew', function(){

	var contador = 1;

	this.set = setInterval(function(){

		contador++;

		if (contador == 9)
		{
			$(".HomeSkew").css('margin-left', '3.65em');
		}
		if(contador == 12)
		{
			$(".HomeSkew").css('margin-left', '-11em');
			contador = 1;
		}


	}, 500);

});

app.service('scroll', function(){

	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 10
		}, 600);

	});

});


app.config(['$locationProvider', '$routeProvider',
	function config($locationProvider, $routeProvider) {
		// $locationProvider.hashPrefix('!');

		$routeProvider.
		when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		}).
		when('/home', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		}).
		when('/inicio', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		}).
		when('/single', {
			templateUrl: 'views/single.html',
			controller: 'singleController'
		}).
		when('/mirim', {
			templateUrl: 'views/mirim.html',
			controller: 'mirimController'
		}).
		when('/projetos', {
			templateUrl: 'views/projetos.html',
			controller: 'projetosController'
		}).
		when('/articulacoes', {
			templateUrl: 'views/articulacoes.html',
			controller: 'articulacoesController'
		}).
		when('/blog', {
			templateUrl: 'views/blog.html',
			controller: 'blogController'
		}).
		when('/midia', {
			templateUrl: 'views/midia.html',
			controller: 'midiaController'
		}).
		when('/contato', {
			templateUrl: 'views/contato.html',
			controller: 'contatoController'
		}).

		otherwise('/home');

	}
	]);


app.controller("homeController", function($scope, MovimentaSkew, scroll)
{
	$scope.tituloBanner = "Envolvendo crianças e jovens na construção do presente.";
	$scope.imagemBanner = "img/banner1.jpg";


});
app.controller("singleController", function($scope)
{

	console.log('singleController');

});
app.controller("mirimController", function($scope, scroll)
{

	$scope.tituloBanner = "Nossa luta é pela defesa e promoção dos direitos humanos, com foco na infância, adolescência e juventude, no Brasil e no mundo.";
	$scope.imagemBanner = "img/banner8.jpg";
	$scope.quemSomosTexto = "O Mirim Brasil (Movimento Infantojuvenil de Reivindicação) é uma entidade sociopolítica, sem fins lucrativos e de direito privado, fundada em 15 dezembro de 1990, no Recife, na região Nordeste do Brasil. Nossa luta é pela defesa e promoção dos direitos humanos, com foco na infância, adolescência e juventude, no Brasil e no mundo.";

});
app.controller("projetosController", function($scope)
{

	console.log('projetosController');

});
app.controller("articulacoesController", function($scope)
{

	console.log('articulacoesController');

});
app.controller("blogController", function($scope)
{

	console.log('blogController');

});
app.controller("midiaController", function($scope)
{

	console.log('midiaController');

});
app.controller("contatoController", function($scope)
{

	console.log('contatoController');

});
app.controller("footerController", function($scope)
{

	console.log('footerController');

});
app.controller("noticiasController", function($scope)
{
	$scope.ultimasNoticias = [
	{img:"img/banner2.jpg", tag: "Associativismo", titulo: "Fojupe planeja grande ato na Semana da Juventude", descricao: "O dia 11 de agosto será marcado por um grande ato na capital pernambucana, organizado….", data: new Date()},
	{img:"img/banner3.jpg", tag: "Associativismo", titulo: "Fojupe planeja grande ato na Semana da Juventude", descricao: "O dia 11 de agosto será marcado por um grande ato na capital pernambucana, organizado….", data: new Date()},
	{img:"img/banner4.jpg", tag: "Associativismo", titulo: "Fojupe planeja grande ato na Semana da Juventude", descricao: "O dia 11 de agosto será marcado por um grande ato na capital pernambucana, organizado….", data: new Date()},
	{img:"img/banner5.jpg", tag: "Associativismo", titulo: "Fojupe planeja grande ato na Semana da Juventude", descricao: "O dia 11 de agosto será marcado por um grande ato na capital pernambucana, organizado….", data: new Date()},
	{img:"img/banner6.jpg", tag: "Associativismo", titulo: "Fojupe planeja grande ato na Semana da Juventude", descricao: "O dia 11 de agosto será marcado por um grande ato na capital pernambucana, organizado….", data: new Date()},
	{img:"img/banner7.jpg", tag: "Associativismo", titulo: "Fojupe planeja grande ato na Semana da Juventude", descricao: "O dia 11 de agosto será marcado por um grande ato na capital pernambucana, organizado….", data: new Date()}
	];

});