
document.addEventListener("DOMContentLoaded", function () 
  var aboutContent = document.querySelector(".about-content card");
  var toggleButton = document.getElementById("toggleButton");
  var isAboutVisible = true;
  function toggleAbout() {
    isAboutVisible = !isAboutVisible;
    aboutContent.style.display = isAboutVisible ? "block" : "none";
  }
  toggleButton.addEventListener("click", toggleAbout);
});
