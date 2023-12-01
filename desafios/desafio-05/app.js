new Vue({
	el: '#desafio',
    data: {
      showFirstParagraph: true,
      showSecondParagraph: false,
      showThirdParagraph: true,
      showFourthParagraph: false,
      array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
      livro: {
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkiens',
        volume: '3'
      },
      aluno: {
        id: 10,
        nome: 'Maria',
        notas: [7.67, 8.33, 6.98, 9.21]
      }
    },
    methods: {
      toggleParagraphs() {
        this.showFirstParagraph = !this.showFirstParagraph;
        this.showSecondParagraph = !this.showSecondParagraph;
        this.showThirdParagraph = !this.showThirdParagraph;
        this.showFourthParagraph = !this.showFourthParagraph;
      }
    }
});
