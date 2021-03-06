if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
            .then(function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope)
                return registration.update()
            }, function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err)
            })
    })
}

// let filterInput = document.getElementById("filterInput");
// let filteredCharacters = []
// filterInput.onkeyup = e => {
//   let value = e.currentTarget.value
//   console.log(value)
// }

// let loader = {
//   show: () => {
//     console.log("show")
//     var loader = document.getElementById("wrapper")
//     loader.classList.remove("hidden")
//     loader.classList.add("flex")
//   },
//   hide: () => {
//     console.log("hide")
//     var loader = document.getElementById("wrapper")
//     loader.classList.remove("flex")
//     loader.classList.add("hidden")
//   }
// }