angular.module('ucsalApp').factory('NoticiasService', function () {
  var publicacoes = [
    {
      id: 1, titulo: 'Rematricula 2026.2 aberta', data: new Date(2026, 5, 15), categoria: 'Noticia',
      texto: 'O prazo de rematricula vai ate 30 de junho. Regularize suas pendencias no portal.'
    },
    {
      id: 2, titulo: 'Edital de Iniciacao Cientifica', data: new Date(2026, 4, 20), categoria: 'Noticia',
      texto: 'Estao abertas as inscricoes para bolsas de Iniciacao Cientifica.'
    },
    {
      id: 3, titulo: 'Semoc UCSal 2026', data: new Date(2026, 9, 5), categoria: 'Evento',
      texto: 'A UCSal participa da Semoc com palestras e minicursos nos campi Pituacu e Federacao.'
    },
    {
      id: 4, titulo: 'Maratona de Programacao', data: new Date(2026, 8, 12), categoria: 'Evento',
      texto: 'Equipes de Engenharia de Software competem na maratona regional.'
    }
  ];

  return {
    listar: function () { return publicacoes; },
    buscar: function (id) {
      return publicacoes.find(function (p) { return p.id === Number(id); });
    }
  };
});
