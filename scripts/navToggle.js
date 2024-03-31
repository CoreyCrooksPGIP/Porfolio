/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navToggle() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    var image = document.getElementById('navToggler');
    image.src = "graphics/svgs/HamburgerButtonDark.svg";
  } else {
    x.className = "topnav";
    var image = document.getElementById('navToggler');
    image.src = "graphics/svgs/HamburgerButton.svg";
  }
}