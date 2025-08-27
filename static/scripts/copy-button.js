// Function that will copy a link to the Clipboard
var copy_buttons = document.getElementsByClassName("project-section-permalink-button");
var i;

for (i = 0; i < copy_buttons.length; i++) {
  copy_buttons[i].addEventListener("click", function() {
	ancestorWithSubprojectName = document.querySelector("p").closest(".project-section-container");
	ancestorId = ancestorWithSubprojectName.id;
	projectName = ancestorId.slice(11);
	  
	linkURL = window.location.href + projectName;
	  
	if ('clipboard' in navigator) {
      // Note: Clipboard API requires HTTPS or localhost
      navigator.clipboard.writeText(linkURL);
      copiedNotification();
      return;
    } else {
      console.debug('Could not copy content!');
    }
	return;
  });
}