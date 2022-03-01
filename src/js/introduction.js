var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [],
    message: 'Testing'
  },
  methods: {
    insertList: function () {
      this.todos.push({ text: this.message })
    }
  }
})

// EXAMPLES
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  },
  methods: {
    seenotsee: function () {
      if (self.seen == false) {
        this.seen = self.seen = true
      } else {
        this.seen = self.seen = false
      }
    }
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
