var shopping = new Vue ({
  el: '#shopping',
  data: {
    header: 'Mini Kalzone',
    image: './img/prod_1.jpeg',
    items: [
      {
        prodId: 1,
        product: "Product 1",
        productImage: "./img/prod_1.jpeg",
        quantity: 10,
      },
      {
        prodId: 2,
        product: "Product 2",
        productImage: "./img/prod_2.jpg",
        quantity: 5
      },
      {
        prodId: 3,
        product: "Product 3",
        productImage: "./img/prod_3.jpg",
        quantity: 14
      },
      {
        prodId: 4,
        product: "Product 4",
        productImage: "./img/mega-sem-nocao.jpg",
        quantity: 7
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    lessToCart() {
      if (this.cart > 0) {
        this.cart -= 1
      }
    },
    cleanToCart() {
      this.cart = 0
    },
    updateProduct(productImage) {
      this.image = productImage
    },
  },
  computed: {
    title() {
      return this.header
    }
  }
})
