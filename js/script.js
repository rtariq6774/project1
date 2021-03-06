/* form validation code */

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

//to initialise the whole webpage
function init() {
  var button = document.getElementById('submitButton');

  function submit() {
    // var fname = document.forms["myForm"]["first_name"].value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone_number").value;
    var email = document.getElementById("email").value;
    var bday = document.getElementById("bday").value;
    //getting input from user
    if (fname === "" || lname === "" || phone === "" || email === "" || bday === "") {
      alert("Please fill in the form");
      return false;
    } else {
      alert("Thank you for submitting your information!");
      document.getElementById("myForm").reset();
      return true;
    }
  }
  button.addEventListener('click', submit);

  var resetbutton = document.getElementById('resetButton');

  // to resets the values of all elements in a form
  function reset() {
    alert("Are you sure you want to reset all the information?");
    document.getElementById("myForm").reset();
  }
  resetbutton.addEventListener('click', reset);
}
window.addEventListener('load', init);
