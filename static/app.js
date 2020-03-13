
  var events = {
    filter: function() {
      var filterInput = document.getElementById("filterInput");
      var filteredCharacters = []
      filterInput.onkeyup = function(e){
        var value = e.currentTarget.value;
        console.log(value);

        api.data.forEach(function(data){
          data.name.toLowerCase();
          var name = data.name.toLowerCase();
          var newName = name.indexOf(value)
          if (newName > -1) {
            filteredCharacters.push(data);
            var type = "list";
            template.render(filteredCharacters, type);
          }
        });
      }
    }
  }
  var helper = {
    loader: {
      show: function(){
        console.log("show");
        var loader = document.getElementById("wrapper");
        loader.classList.remove("hidden");
        loader.classList.add("flex");
      },
      hide: function(){
        console.log("hide");
        var loader = document.getElementById("wrapper");
        loader.classList.remove("flex");
        loader.classList.add("hidden");
      }
    }
  }