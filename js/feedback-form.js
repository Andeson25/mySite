$(document).ready(function() {
  $("#ajaxform").submit(function(e) {
    e.preventDefault();
    var form = $(this);
    var errors = false;
    form.find("input, textarea").each(function() {
      if ($(this).val() === "") {
        alert('Please fill the field "' + $(this).attr("placeholder") + '"!');
        errors = true;
      }
    });
    if (!errors) {
      var data = form.serialize();
      $.ajax({
        type: "POST",
        url: "https://formspree.io/danil.monets@gmail.com",
        dataType: "json",
        data: data,
        success: function() {
          alert("Form was delivered!");
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
