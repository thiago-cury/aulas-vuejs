var vue = new Vue({
  el: "#app",
  data: {
    "name": ""
  },
  methods : {
    add() {
      alert("Seu nome é: " + this.name);
    }
  }
});
