var vue = new Vue({
  el: "#app",
  data: {
    "name": "Eduardo",
    "lastName": "Silva"
  },
  computed: { //métodos internos
    fullName() {
      return this.name + " " + this.lastName;
    }
  }
});
