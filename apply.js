document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    var name = document.getElementById("name").value;
    var idNumber = document.getElementById("idNumber").value;
    var idImage = document.getElementById("idImage").value;
    var email = document.getElementById("email").value;
    var spouseName = document.getElementById("spouseName").value;
    var spouseIdNumber = document.getElementById("spouseIdNumber").value;
    var spouseIdImage = document.getElementById("spouseIdImage").value;
    var spouseEmail = document.getElementById("spouseEmail").value;
    var numChildren = document.getElementById("numChildren").value;
    var referralNumber = document.getElementById("referralNumber").value;
  
    // Retrieve child details
    var children = [];
    var childrenContainer = document.getElementById("childrenContainer");
    for (var i = 1; i <= numChildren; i++) {
      var childName = document.getElementById("
  