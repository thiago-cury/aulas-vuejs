//com vueJS
var app = new Vue({
  el: '#app',
  data: {
    name: "Thiago",
    lastName: "Cury",
    n1: 7,
    n2: 8,
    situation: true
  },
  methods : {

  },
  computed : {
    fullName() {
      return this.name + ' - ' + this.lastName
    },
    calculateMedia() {
      return (this.n1 + this.n2) / 2
    }
  }
})
