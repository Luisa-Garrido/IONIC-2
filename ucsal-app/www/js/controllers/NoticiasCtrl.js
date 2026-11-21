angular.module('ucsalApp').controller('NoticiasCtrl', function ($scope, $stateParams, NoticiasService) {
  $scope.filtro = {};

  // O Ionic mantem a view em cache, entao o controller so e criado uma vez.
  // Os dados sao recarregados a cada vez que a tela e exibida.
  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.publicacoes = NoticiasService.listar();
    $scope.item = NoticiasService.buscar($stateParams.id);   // usado na tela de detalhe
  });
});
