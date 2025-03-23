//Code Source: https://www.w3schools.com/howto/howto_js_collapsible.asp
var collapsible_buttons = document.getElementsByClassName("collapsible-section-header");
var i;

for (i = 0; i < collapsible_buttons.length; i++) {
  collapsible_buttons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 