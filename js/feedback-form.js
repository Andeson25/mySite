$(document).ready(function() {
  $("#ajaxform").submit(e=> {
      
    var form = $(this);
    var error = false;
    form.find("input, textarea").each(function() {
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
        success: () => {
          alert("Form was delivered successfully!");
        },
        error: function(xhr, ajaxOptions, thrownError) {
          alert(xhr.status);
          alert(thrownError);
          alert("EROR!");
        }
      });
    }
    return false;
  });
});
