function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Form submitted successfully");
    }
    document.getElementById("username").value="";
    document.getElementById("password").value="";

    

}