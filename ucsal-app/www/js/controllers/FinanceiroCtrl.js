angular.module('ucsalApp').controller('FinanceiroCtrl', function ($scope, FinanceiroService) {
  $scope.listar = FinanceiroService.listar;
  $scope.sel = { semestre: '2026.2' };

  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.semestres = FinanceiroService.semestres();
    $scope.sel.semestre = '2026.2';
    // limpa a confirmacao "Copiado!" de visitas anteriores
    $scope.semestres.forEach(function (s) {
      FinanceiroService.listar(s).forEach(function (m) { m.copiado = false; });
    });
  });

  $scope.copiar = function (m) {
    navigator.clipboard.writeText(m.codigo);
    m.copiado = true;   // mostra a confirmacao visual
  };
});
