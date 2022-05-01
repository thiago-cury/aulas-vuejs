//com vueJS
var app = new Vue({
  el: '#app',
  data: {
    clicks: 0,
  },
  methods: {
    addClick() {
      this.clicks+=1;
    },
    subClick() {
      this.clicks-=1;
    }
  }
})
