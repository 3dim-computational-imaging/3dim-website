// Function that will copy a link to the Clipboard
function copyLink(linkURL) {
	if ('clipboard' in navigator) {
      // Note: Clipboard API requires HTTPS or localhost
      navigator.clipboard.writeText(linkURL);
      copiedNotification();
      return;
    } else {
      console.debug('Could not copy content!');
    }
	return;
}