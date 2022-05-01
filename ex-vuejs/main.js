//normal
//var product = "Chinelo";

var eventBus = new Vue({

});

Vue.component('product-review', {
  template: `
  <form class="review-form" @submit.prevent="onSubmit">

    <p>ERRORS: {{ errors.length }}</p>

    <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
    </p>

    <p>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="name">
    </p>

    <p>
      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>
    </p>

    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>

    <p>
      <input type="submit" value="Submit">
    </p>
  </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    }
  },
  methods : {
    onSubmit() {
      if(this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        }
        eventBus.$emit('review-submitted', productReview)
        this.name = null
        this.review = null
        this.rating = null
      } else {
        if(!this.name) this.errors.push("Name required.")
        if(!this.review) this.errors.push("Review required.")
        if(!this.rating) this.errors.push("Rating required.")
      }
    }
  }
})

Vue.component("product",{
  props: {
    premium: {
        type: Boolean,
        required: true
    }
  },
  template: `<div class="product">
    <div class="product-image">
      <a v-bind:href="link">
        <img v-bind:src="image" v-bind:alt="description"
        v-bind:title="description"
        v-bind:class="isActive"
        v-bind:style="isStyled"
        v-bind:disabled="isDisabled"/>
      </a>
    </div>

    <div class="product-info">
      <h1>Produto</h1>
      <!-- podemos chamar separado ou um computed -->
      <h2>{{ brand }} {{ product }}</h2>

      <!-- podemos chamar separado ou um computed -->
      <h2>{{ title }}</h2>

      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>

      <!-- antes -->
      <!-- <div v-for="vari in variants" :key="vari.variantID">
        <p @mouseover="updateProduct(vari.variantImage)">{{ vari.variantColor }}</p>
      </div> -->

      <!-- depois -->
      <!-- <div v-for="vari in variants" :key="vari.variantID"
           class="colorbox" :style="{ backgroundColor: vari.variantColor }"
           @mouseover="updateProduct(vari.variantImage)">
      </div> -->

      <!-- depois melhorado -->
      <div v-for="(vari, index) in variants" :key="vari.variantID"
           class="colorbox" :style="{ backgroundColor: vari.variantColor }"
           @mouseover="updateProduct(index)">
      </div>

      <p v-if="inventory > 10">Temos mais de 10 deste produto...</p>
      <p v-if="inventory > 0 && inventory < 5">São os cinco produtos finais gurizada...</p>
      <p v-if="inStock">Em estoque</p>
      <p v-else>Sem estoque. Avisamos qdo chegar...</p>

      <p>User is premium: {{ premium }}</p>

      <p>Shipping: {{ shipping }}</p>

      <h2 v-if="onSale">Challenge Computed Properties</h2>
      <p v-if="onSale">-> {{ onSaleOK }}</p>

      <!-- INÍCIO -->
      <!-- Alterando direto a variável -->
      <!--<button v-on:click="cart += 1">Add to Cart</button>-->
      <!--<button v-on:click="cart -= 1">Remove to Cart</button>-->
      <!--<div class="cart">
        <p>Cart({{cart}})</p>
      </div>-->
      <!-- FIM -->

      <!-- INÍCIO -->
      <!-- Alterando com metodo -->
      <button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }">Add to Cart</button>
      <!-- ou -->
      <!--<button @click="addToCart">Add to Cart</button>-->

      <!--<button v-on:click="removeToCart">Remove to Cart</button>-->
      <!--<div class="cart">
        <p>Cart({{newCart}})</p>
      </div>-->
      <!-- FIM -->

      <!-- alterando com componentes + emit -->
      <button @click="addToCart">Add to Cart</button>
      <button @click="removeToCart">Remove to Cart</button>

      <!-- Outros exemplos -->
      <!--
      <button @click=""></button>
      <div @mouseover=""></div>
      <form @submit=""></>
      <input @keyup.enter="send">
      -->
    </div>
  </div>
  `,
  data() {
    return {
      brand: "Vue Mastery",
      product: 'Chinelo',
      //image: './assets/chinelo.jpg',
      selectedVariant: 0,
      link: 'https://www.americanas.com.br/',
      //inStock: true,
      onSale: false,
      inventory: 3,
      description: 'Esse é um chinelo para venda',
      activeClass: true,
      errorClass: false,
      isActive: true,
      isStyled: true,
      isDisabled: false,
      details: ["asdf","jklç","qwer"],
      variants: [
        {
          variantID: 1,
          variantColor: "green",
          variantImage: "./assets/chinelo_verde.jpg",
          variantQuantity: 10
        },
        {
          variantID: 2,
          variantColor: "blue",
          variantImage: "./assets/chinelo.jpg",
          variantQuantity: 0
        }
      ]
    }
  },
  methods: {
    // addToCart: function() {
    //   this.newCart += 1
    // },
    removeToCart: function() {
      //this.newCart -= 1
    },
    addToCart: function() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant.variantID])
    },
    // updateProduct: function (variantImage) {
    //   this.image = variantImage
    // },
    updateProduct: function (index) {
      this.selectedVariant = index
      console.log(index);
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image(){
        return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSaleOK() {
      return this.brand + ' ' + this.product;
    },
    shipping() {
      if(this.premium) {
        return "Free"
      }
      return "$ 2.99"
    }
  },
  mounted() {
    eventBus.$on('review-submitted', productReview => {
      this.reviews.push(productReview)
    })
  }
})

Vue.component('product-tabs', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
     template: `
       <div>
         <span class="tab"
         :class="{ activeTab: selectedTab === tab }"
         v-for="(tab, index) in tabs"
         :key="index"
         @click="selectedTab = tab">{{ tab }}</span>

         <product-review v-show="selectedTab === 'Make a Review'"></product-review>

         <div v-show="selectedTab === 'Reviews'">
           <h2>Reviews</h2>
           <p v-if="!reviews.length">There are no reviews yet.</p>
           <ul>
             <li v-for="review in reviews">
             <p>{{ review.name }}</p>
             <p>Rating: {{ review.rating }}</p>
             <p>{{ review.review }}</p>
             </li>
           </ul>
          </div>

       </div>
     `,
     data() {
       return {
         tabs: ['Reviews', 'Make a Review'],
         selectedTab: 'Reviews'
       }
     }
   })

//com vueJS
var app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: [],
    newCart: 0,
    reviews: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
})
