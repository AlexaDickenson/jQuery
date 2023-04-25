$(document).ready(function() {
    $("#submit").click(function() {
      // variables for each form input
      var name = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      
      // array of required fields
      var required = [name, email, phone];
      
      // check for empty values
      for (var i = 0; i < required.length; i++) {
        if (required[i] === "") {
          // Display error message and add the warning class
          $("#message").text("Please Fill Out Required Fields").addClass("warning");
          $("label").eq(i).addClass("warning");
        } else {
          // Remove the warning class if the field has a value
          $("label").eq(i).removeClass("warning");
        }
      }
      
      // Check if any fields are still missing values
      if ($(".warning").length === 0) {
        // Remove the form and display a success message
        $("#form").remove();
        $("#pre-form h2").text("Thanks for your feedback!");
      }
    });
  });
  