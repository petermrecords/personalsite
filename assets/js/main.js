function setTimelineHeight() {
  var height = $("#timeline-items").height();
  $("#timeline-line").height(height);
  console.log("AS");
};

function toggleResumeDetails(element) {
  var resumeBody = $(element).parent().parent().find(".resume-item-body");
  resumeBody.slideToggle(500, function() {
    setTimelineHeight();
  });
};

$(document).ready(function() {

  $("#timeline-items").ready(function(e) {
    setTimelineHeight();
  });

  // show/hide resume details

  $(".resume-item-headline i").click(function(e) {
    toggleResumeDetails(this);
  });

});