angular.module('ucsalApp').controller('LoginCtrl', function ($scope, $state, AuthService) {
  AuthService.logout();   // ao voltar para o login, encerra a sessao
  $scope.form = {};

  $scope.entrar = function () {
    if (AuthService.login($scope.form.matricula, $scope.form.senha)) {
      $state.go('app.noticias');
    } else {
      $scope.erro = 'Matricula ou senha invalidos.';
    }
  };
});
