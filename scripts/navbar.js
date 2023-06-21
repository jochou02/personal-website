document.addEventListener("DOMContentLoaded", function() {
  // Get the navbar
  var navbar = document.querySelector(".navbar");

  // Attach a scroll event listener to the window
  window.addEventListener("scroll", function() {
    // If the scroll position is more than 50px from the top, add the "solid" class
    if (window.scrollY > 50) {
      navbar.classList.remove("transparent");
      navbar.classList.add("solid");
    } else {
      // Otherwise, make the navbar transparent
      navbar.classList.remove("solid");
      navbar.classList.add("transparent");
    }
  });
});


