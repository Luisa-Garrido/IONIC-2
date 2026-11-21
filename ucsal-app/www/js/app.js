angular.module('ucsalApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', { url: '/login', templateUrl: 'templates/login.html', controller: 'LoginCtrl' })
    .state('app', { url: '/app', abstract: true, templateUrl: 'templates/menu.html' })
    .state('app.noticias', {
      url: '/noticias',
      views: { menuContent: { templateUrl: 'templates/noticias.html', controller: 'NoticiasCtrl' } }
    })
    .state('app.detalhe', {
      url: '/noticias/:id',
      views: { menuContent: { templateUrl: 'templates/noticia-detalhe.html', controller: 'NoticiasCtrl' } }
    })
    .state('app.perfil', {
      url: '/perfil',
      views: { menuContent: { templateUrl: 'templates/perfil.html', controller: 'PerfilCtrl' } }
    })
    .state('app.financeiro', {
      url: '/financeiro',
      views: { menuContent: { templateUrl: 'templates/financeiro.html', controller: 'FinanceiroCtrl' } }
    });

  $urlRouterProvider.otherwise('/login');
});
