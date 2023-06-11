// Function to handle search button click
function search() {
    var searchInput = document.getElementById('search-input');
    var resultsDiv = document.getElementById('results');
  
    // Check if Geolocation is supported by the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
  
        // Use latitude and longitude to perform search or API request
        // Here, you can make an API request to retrieve hospitals based on the user's location
  
        // Clear previous results
        resultsDiv.innerHTML = '';
  
        // Display search results
        var result = document.createElement('p');
        result.textContent = 'Hospitals near ' + searchInput.value + ': Hospital A, Hospital B, Hospital C';
        resultsDiv.appendChild(result);
      }, function(error) {
        // Handle error if user denies permission or any other geolocation error
        resultsDiv.innerHTML = '<p>Error retrieving your location.</p>';
      });
    } else {
      resultsDiv.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
    }
  }
  
  // Attach event listener to search button
  document.getElementById('search-button').addEventListener('click', search);
  