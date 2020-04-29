var vue = new Vue({
  el: "#app",
  data: {
    name: "Thiago"
  },
  computed: {
  },
  methods: {
    sendMSG() {
      console.log("aí sim " + this.name + "... hello vue");
      alert("aí sim " + this.name + "... hello vue");
    }
  }
});
