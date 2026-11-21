angular.module('ucsalApp').factory('AuthService', function ($rootScope) {
  var alunos = [
    { matricula: '200028619', senha: '123456', nome: 'Luísa Garrido Matos', curso: 'Engenharia de Software' }
  ];

  return {
    login: function (matricula, senha) {
      var aluno = alunos.find(function (a) {
        return a.matricula === matricula && a.senha === senha;
      });
      $rootScope.aluno = aluno || null;   // aluno logado fica em memoria
      return !!aluno;
    },
    logout: function () { $rootScope.aluno = null; }
  };
});
