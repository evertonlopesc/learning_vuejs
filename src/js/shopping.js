var shopping = new Vue ({
  el: '#shopping',
  data: {
    header: 'Mini Kalzone',
    image: './img/prod_1.jpeg',
    details: [
      'Name: XXX', 'Ingredient: ...'
    ],
    items: [
      {
        prodId: 1,
        product: 'Product 1',
        productImage: '../img/prod_1.jpeg'
      },
      {
        prodId: 2,
        product: 'Product 2',
        productImage: '../img/prod_2.jpg'
      },
      {
        prodId: 3,
        product: 'Product 3',
        productImage: '../img/prod_3.jpg'
      },
      {
        prodId: 4,
        product: 'Product 4',
        productImage: '../img/mega-sem-nocao.jpg'
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
  },
})
