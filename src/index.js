//function city_search_action() {
//  let city_name = prompt("What was that city again?");
// alert(
//   "When this page is functional, the temperature below will change to the temperature in " +
//     city_name +
//     "!"
// );
// return false;
// }

// https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

function city_search_action() {
  let name = document.getElementById("searchbar").value;
  if (name === "Paris" || name === "London" || name === "Mexico City") {
    //populate temperature and change recent searches;//
    alert("I haven't added functionality for " + name + ", " + "sorry!");
  } else if (name === "") {
    alert("You didn't enter a city name!");
  }
  return false;
}

function current_location_action(evt, current_location_action) {
  alert("Soon, the info below will show the weather in your location!");
  return false;
}

function openF(evt, fahrenheit) {
  alert(
    "When this page is functional, the temperature scale will change fahrenheit!"
  );
  return false;
}

function openC(evt, centigrade) {
  alert(
    "When this page is functional, the temperature scale will change centigrade!"
  );
  return false;
}

function openWhen(evt, when) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(when).style.display = "block";
  evt.currentTarget.className += " active";
}

function openWhere(evt, where) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(where).style.display = "block";
  evt.currentTarget.className += " active";
}

function openRecent() {
  alert("I can't change temperatures or store searches yet! Sorry.");
  return false;
}
