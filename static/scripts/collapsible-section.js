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

window.addEventListener('hashchange', function() {
  const pageId = window.location.hash.substring(1); // Remove the '#'
  if (pageId) {
	openLinkedCollapsibleSection(pageId);
  }
});

if (window.location.hash) {
  const pageId = window.location.hash.substring(1);
  openLinkedCollapsibleSection(pageId);
}

function openLinkedCollapsibleSection(pageId) {
	pageElement = document.getElementById(pageId);
	if(pageElement.classList.contains("collapsible-section-shell")) {
		for (var i = 0; i < pageElement.childNodes.length; i++) {
			if (pageElement.childNodes[i].classList.contains("collapsible-section-header")) {
				pageElement.childNodes[i].classList.add("active");
				break;
			}        
		}
	}
}