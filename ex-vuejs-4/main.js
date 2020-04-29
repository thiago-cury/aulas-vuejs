var vue = new Vue({
  el: "#app",
  data: {
    "name": "Thiago",
    "grade1": 10.0,
    "grade2": 9.5,
    "status": true
  },
  computed: {
    average() {
      return (this.grade1 + this.grade2)/2;
    }
  }
});
