$(document).ready(function() {

  // show/hide resume details
  $(".resume-item-headline").click(function(e) {
    var resumeBody = $(this).parent().find(".resume-item-body");
    if (resumeBody.hasClass("hidden")) {
      resumeBody.fadeIn(500, function() {
        resumeBody.removeClass("hidden");
      });
    } else {
      resumeBody.fadeOut(500, function() {
        resumeBody.addClass("hidden");
      });
    }
  });

});