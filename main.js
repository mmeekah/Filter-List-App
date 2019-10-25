//Select user input

var filter = document.querySelector("#filter");

//Filter list by the input
function filterNames() {
  //Get value of user input
  var filterValue = filter.value;
  console.log(filterValue);

  //get contact Names:
  var names = document.querySelectorAll("li a");

  //loop over names
  for (var i = 0; i < names.length; i++) {
    //compare each name with filter value

    if (names[i].innerText.toUpperCase().includes(filterValue.toUpperCase())) {
      names[i].parentElement.style.display = "block";
    } else {
      names[i].parentElement.style.display = "none";
    }
  }
}
//Add eventListener to User input

filter.addEventListener("input", filterNames);
