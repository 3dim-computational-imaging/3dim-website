// Function that will copy a link to the Clipboard
var copy_buttons = document.getElementsByClassName("project-section-permalink-button");
var i;

for (i = 0; i < copy_buttons.length; i++) {
  copy_buttons[i].addEventListener("click", function() {
	var ancestorWithSubprojectName = this.closest(".project-section-container");
	var ancestorId = ancestorWithSubprojectName.id;
	var projectName = ancestorId.slice(11);
	  
	var linkURL = window.location.href + projectName;
	  
	if ('clipboard' in navigator) {
      // Note: Clipboard API requires HTTPS or localhost
      navigator.clipboard.writeText(linkURL);
	  
	  initialHTML = copyBtn.innerHTML;
	  copyBtn.innerHTML = "Link Copied!";
      setTimeout(() => {
        copyBtn.innerHTML = initialHTML;
      }, 2000);
    } else {
      console.debug('Could not copy content!');
    }
	return;
  });
}