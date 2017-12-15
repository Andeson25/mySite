$(document).ready(function() {
  $("#ajaxform").submit(e => {
    var form = $(this);
    var error = false;
    form.find("input, textarea").each(() => {
      if ($(this).val() == "") {
        alert('Please fill the field "' + $(this).attr("placeholder") + '"!');
        error = true;
      }
    });
    if (!error) {
      var data = form.serialize();
      $.ajax({
        type: "POST",
        url: "https://formspree.io/oleh.petryk@gmail.com",
        dataType: "json",
        data: data,
        success: function(data) {
          if (data["error"]) {
            alert(data["error"]);
          } else {
            alert("Form was delivered!");
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          alert(xhr.status);
          alert(thrownError);
        }
      });
    }
    return false;
  });
});
