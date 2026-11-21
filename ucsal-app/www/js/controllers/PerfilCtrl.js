angular.module('ucsalApp').controller('PerfilCtrl', function ($scope, $rootScope, $ionicPopup, AlunoService) {
  // Recarrega a cada entrada na tela: descarta edicoes nao salvas e evita
  // mostrar dados de outro aluno apos logout/login.
  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.dados = AlunoService.obter($rootScope.aluno.matricula);
  });

  $scope.salvar = function () {
    AlunoService.salvar($rootScope.aluno.matricula, $scope.dados);
    $ionicPopup.alert({ title: 'Sucesso', template: 'Dados salvos!' });
  };
});
