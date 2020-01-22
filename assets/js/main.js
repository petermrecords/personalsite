function toggleResumeDetails(element) {
  var resumeBody = $(element).parent().parent().parent().parent().parent().parent().find(".resume-item-body");
  resumeBody.slideToggle(500);
};

$(document).ready(function() {

  // show/hide resume details
  $(".resume-item-headline i").click(function(e) {
    toggleResumeDetails(this);
  });

  // download button
  $("#resume-download-button").click(function(e) {
    var fileLink = $(this).children("a").attr("href");
    window.location.href = fileLink;
  });
});