function toggleResumeDetails(element) {
  var resumeBody = $(element).parent().find("li.resume-details");
  resumeBody.slideToggle(500);
};

function showResumeShadow(element) {
  var resumeHeadline = $(element).find("div.resume-content");
  var resumeIcon = $(element).find("i");
  resumeHeadline.css("text-shadow", "0em 0em 0.05em #BE4141");
  resumeIcon.css("text-shadow","0px 0px 2px #41BE41");
};

function hideResumeShadow(element) {
  var resumeHeadline = $(element).find("div.resume-content");
  var resumeIcon = $(element).find("i");
  resumeHeadline.css("text-shadow", "none");
  resumeIcon.css("text-shadow","none");
}

$(document).ready(function() {

  // show/hide resume details
  $(".resume-headline").click(function(e) {
    toggleResumeDetails(this);
  });

  // headline hover styling
  $(".resume-headline").mouseenter(function(e) {
    showResumeShadow(this);
  });

  $(".resume-headline").mouseleave(function(e) {
    hideResumeShadow(this);
  });

  // download button
  $("#resume-download-button").click(function(e) {
    var fileLink = $(this).children("a").attr("href");
    window.location.href = fileLink;
  });
});