$("#ajaxform").submit(function(e) {
  e.preventDefault();
  var form = $(this);
  var errorsCount = 0;
  form.find("input, textarea").each(function() {
    if ($(this).val() === "") {
      $(this).addClass("banned");
      errorsCount++;
    }
  });
  form.find("input, textarea").on("change", function() {
    if ($(this).val() != "") {
      $(this).removeClass("banned");
      errorsCount--;
    }
  });
  if (errorsCount === 0) {
    var data = form.serialize();
    $.ajax({
      type: "POST",
      url: "https://formspree.io/oleh.petryk@gmail.com",
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
