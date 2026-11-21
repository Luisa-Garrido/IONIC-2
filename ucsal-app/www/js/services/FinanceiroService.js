angular.module('ucsalApp').factory('FinanceiroService', function () {
  var cod = '23790.12345 60000.123456 78901.234567 8 99990000125000';
  var mensalidades = {
    '2025.2': [
      { mes: 'Agosto/2025', vencimento: new Date(2025, 7, 10), valor: 1250, status: 'Paga' },
      { mes: 'Setembro/2025', vencimento: new Date(2025, 8, 10), valor: 1250, status: 'Paga' }
    ],
    '2026.1': [
      { mes: 'Fevereiro/2026', vencimento: new Date(2026, 1, 10), valor: 1250, status: 'Paga' },
      { mes: 'Marco/2026', vencimento: new Date(2026, 2, 10), valor: 1250, status: 'Paga' }
    ],
    '2026.2': [
      { mes: 'Agosto/2026', vencimento: new Date(2026, 7, 10), valor: 1330, status: 'Paga' },
      { mes: 'Setembro/2026', vencimento: new Date(2026, 8, 10), valor: 1330, status: 'A Pagar', codigo: cod },
      { mes: 'Outubro/2026', vencimento: new Date(2026, 9, 10), valor: 1330, status: 'A Pagar', codigo: cod }
    ]
  };

  return {
    semestres: function () { return Object.keys(mensalidades); },
    listar: function (semestre) { return mensalidades[semestre]; }
  };
});
