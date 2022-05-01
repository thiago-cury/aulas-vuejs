//com vueJS
var app = new Vue({
  el: '#app',
  data: {
    title: "Pessoas",
    subtitle: "Agenda de contatos"
  },
  methods : {

  },
  computed : {
    fullTitle() {
      return this.title + ' - ' + this.subtitle
    },
  }
})
