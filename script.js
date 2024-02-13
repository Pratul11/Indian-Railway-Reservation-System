function toggleMenu() {
  var links = document.querySelectorAll(".menu-bar a");
  links.forEach(function (link) {
    link.style.display =
      link.style.display === "none" ? "inline-block" : "none";
  });
}
