function toggleMenu() {
  var links = document.querySelectorAll(".menu-btn a");
  links.forEach(function (link) {
    link.style.display =
      link.style.display === "none" ? "inline-block" : "none";
  });
}

// Disable the previous dates

$(function () {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  var maxDate = year + "-" + month + "-" + day;
  $("#date").attr("min", maxDate);
});
