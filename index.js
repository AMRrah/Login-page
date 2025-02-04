function validateForm() {
  // Get form values
  var email = document.forms["regForm"]["email"].value;
  var password = document.forms["regForm"]["password"].value;

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  // All validations passed
  alert("Login Successful!");
  return true;
} // Redirect to the Si

function submitPayment() {
  let cardDetails = document.getElementById("cardDetails").value;
  let Month = document.getElementById("Month").value;
  let cvv = document.getElementById("Cvv").value;
  if (cardDetails.length < 15) {
    alert("Please enter valid card details.");
  }
  if (Month.length < 4) {
    alert("Please enter valid Month and year.");
  }
  if (cvv.length < 3) {
    alert("please enter the valid Cvv pin");
  } else {
    alert("Payment completed");
  }
}
