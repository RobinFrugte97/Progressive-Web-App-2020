
let filterInput = document.getElementById("filterInput");
let filteredCharacters = []
filterInput.onkeyup = e => {
  let value = e.currentTarget.value
  console.log(value)
}

let loader = {
  show: () => {
    console.log("show")
    var loader = document.getElementById("wrapper")
    loader.classList.remove("hidden")
    loader.classList.add("flex")
  },
  hide: () => {
    console.log("hide")
    var loader = document.getElementById("wrapper")
    loader.classList.remove("flex")
    loader.classList.add("hidden")
  }
}
self.addEventListener('install', event => {

})

self.addEventListener('active', event => {

})

self.addEventListener('fetch', event => {

})