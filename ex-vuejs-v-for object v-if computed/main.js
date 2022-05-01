//com vueJS
var app = new Vue({
  el: '#app',
  data: {
    title: "Pessoas",
    subtitle: "Agenda de contatos",
    persons: [
      {
        ID: 1,
        name: "Jan Luc",
        color: "gray",
        image: "./assets/man.png",
        imageDescription: "Avatar de um homem",
        jedi: false,
        isPeople: true,
        xp: 65
      },
      {
        ID: 2,
        name: "Johana",
        color: "pink",
        image: "./assets/woman.png",
        imageDescription: "Avatar de uma mulher",
        jedi: true,
        isPeople: true,
        xp: 100
      },
      {
        ID: 3,
        name: "Luke",
        color: "red",
        image: "./assets/man.png",
        imageDescription: "Avatar de um jedi foda",
        jedi: true,
        isPeople: false,
        xp: 200
      }
    ],
  },
  methods : {

  },
  computed : {
    fullTitle() {
      return this.title + ' - ' + this.subtitle
    },
  }
})
