function toggleResumeDetails(element) {
  var resumeBody = $(element).parent().parent().parent()
  console.log(resumeBody);
  // resumeBody.slideToggle(500);
};

$(document).ready(function() {

  // show/hide resume details
  $(".resume-headline i").click(function(e) {
    toggleResumeDetails(this);
  });

  // download button
  $("#resume-download-button").click(function(e) {
    var fileLink = $(this).children("a").attr("href");
    window.location.href = fileLink;
  });
});