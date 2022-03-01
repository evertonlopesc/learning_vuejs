Vue.component('navbar', {
  template: `
    <header class="m-auto justify-center bg-green-800">
      <!-- HEADER -->
      <h1 class="text-6xl p-3 text-center text-white">Learning VueJS</h1>
      <p class="text-center text-white">vue.js version: 2.x</p>
      <nav class="bg-green-500 text-center">
        <div class="max-w-6xl m-auto mt-5 justify-center">
          <div class="flex flex-wrap justify-around mt-5 p-2">
            <a class="bg-white text-green-500 w-32 py-1 text-lg rounded-md hover:bg-green-400 hover:text-white"
               href="./index.html"
            >
              Home
            </a>
            <a class="bg-white text-green-500 w-32 py-1 text-lg rounded-md hover:bg-green-400 hover:text-white"
               href="./introduction.html"
            >
              Introduction
            </a>
            <a class="bg-white text-green-500 w-32 py-1 text-lg rounded-md hover:bg-green-400 hover:text-white"
               href="./todo.html"
            >
              To-do
            </a>
            <a class="bg-white text-green-500 w-32 py-1 text-lg rounded-md hover:bg-green-400 hover:text-white"
               href="./shopping.html"
            >
              Shopping
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
})

var navbar = new Vue ({
  el: "#navbar"
})
