angular.module('ucsalApp').factory('AlunoService', function () {
  var contatos = {
    '200028619': {
      email: 'lgm@email.com', telefone: '(71) 99370-3331',
      cep: '40140-080', rua: 'Afonso Celso', bairro: 'Barra', cidade: 'Salvador'
    }
  };

  return {
    obter: function (matricula) { return angular.copy(contatos[matricula]); },
    salvar: function (matricula, dados) { contatos[matricula] = angular.copy(dados); }
  };
});
