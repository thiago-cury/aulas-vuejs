//com vueJS
var app = new Vue({
  el: '#app',
  data: {
    title: "Formulário",
    subtitle: "Exemplo VueJS",
    name: null,
    review: null,
    rating: null,
    errors: [],
    reviews: []
  },
  methods : {
    onSubmit() {
      //zerando o Array
      this.errors = []
      if(this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }
        //eventBus.$emit('review-submitted', productReview)

        //Salvando a review
        this.reviews.push(productReview)
        //Limpando os campos
        this.clean();
      } else {
        if(!this.name) this.errors.push("Digite o nome.")
        if(!this.review) this.errors.push("Digite a sua opinião.")
        if(!this.rating) this.errors.push("Marque quantas estrelas achar necessário.")
      }
    },
    clean() {
      this.name = null
      this.review = null
      this.rating = null
    }
  }
})
