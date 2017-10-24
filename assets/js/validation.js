$("#btnSend").click(function () {
      if ($("#email").val() == '') {
	$(".error").remove();
        $("#btnSend").after("<h3 class='error'>Please fill in your email address.</h3>");
        return;
      }
      if ($("#subject").val() == '') {
	$(".error").remove();
        $("#btnSend").after("<h3 class='error'>Please fill in a subject.</h3>");
        return;
      }
      if ($("#message").val() == '') {
	$(".error").remove();
        $("#btnSend").after("<h3 class='error'>Please write a message.</h3>");
        return;
      }

      var check = document.getElementById("answer").value;
      if (check == "15") {
        var subject = document.getElementById("subject").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var dataString = 'subject=' + subject + "&email=" + email + "&message=" + message; 

        $.ajax({
          type: "POST",
          url: "contact.php",
          data: dataString,
          cache: false,
          success: function (html) {
            $(".error").remove();
            $("#subject").val('');
            $("#email").val('');
            $("#message").val('');
	    $("#btnSend").prop("disabled",true);
            $("#btnSend").after("<h3 class='success'>Thanks for the message! I'll respond ASAP!</h3>");
          }
        });
      }
      else {
	$(".error").remove();
        $("#btnSend").after("<h3 class='error'>Please answer the question.</h3>");
      }
    });