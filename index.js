// Get a reference to the table body
//var tbody = d3.select("tbody");

// Console.log the weather data from data.js
//console.log(data);

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
//  // var $cityInput = document.querySelector("#city");
var $searchBtn = document.querySelector("#filter-btn");
  
//   // Add an event listener to the $searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
  
// Set filteredAddresses to addressData initially
var filteredAddresses = data;
  
  // renderTable renders the filteredAddresses to the tbody
  function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredAddresses.length; i++) {
      // Get the current address object and its fields
      var address = filteredAddresses[i];
      var fields = Object.keys(address);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell and set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      }
    }
  }
  function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterdate = $dateInput.value.trim().toLowerCase();
    //var filterCity = $cityInput.value.trim().toLowerCase();
    d3.event.preventDefault();

    // Set filteredAddresses to an array of all addresses who's "state" matches the filter
    filteredAddresses = data.filter(function(data) {
      var data = data.date.substring(0, filterdate.length).toLowerCase();
      //var addressCity = address.city.substring(0, filterCity.length).toLowerCase();
      if (data === filterdate) {
        //return true;
        return data;
      }
      return false;
    });
    //renderTable();
  }
  
// Render the table for the first time on page load
renderTable();