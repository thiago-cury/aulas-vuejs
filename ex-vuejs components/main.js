Vue.component('product-out',{
    name: 'product-in',
    props: ['message'],
    template: '<div>{{ message }}</div>',
    data(){
      return {
      }
    }
})

Vue.component('post', {
  props: {
      message : {
        type: String,
        required: true,
        default: "E ae!"
      }
  },
  template: '<h3>{{ message }}</h3>'
})

//com vueJS
var app = new Vue({
  el: '#app'
})
