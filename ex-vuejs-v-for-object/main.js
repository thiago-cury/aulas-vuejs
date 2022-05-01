//com vueJS
var app = new Vue({
  el: '#app',
  data: {
    title: "Pessoas",
    persons: [
      {
        ID: 1,
        description: "Jan Luc",
        color: "verde",
        image: "./assets/man.png",
        imageDescription: "Avatar de um homem",
        xp: 65
      },
      {
        ID: 2,
        description: "Johana",
        color: "rosa",
        image: "./assets/woman.png",
        imageDescription: "Avatar de uma mulher",
        xp: 100
      }
    ],
  }
})
