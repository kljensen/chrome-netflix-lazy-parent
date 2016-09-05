

function init() {
  // Get our list of bannedLabels, one per line.
  chrome.storage.sync.get({
    bannedLabels: [],
  }, function(items) {

    // Create a new stylesheet
    var sheet = document.createElement('style')

    // Split the lines in the bannedLabels
    var splitLabels = items.bannedLabels.split(/\r?\n/);

    // Build a css selector
    var selector = splitLabels
      .map(function(l){
        return '[aria-label*="' + l.replace('"', '\\"') + '"]';
      })
      .join(',');

    // Add it to the stylesheet
    sheet.innerHTML = selector + ' {display: none;}';

    // Log for debugging
    console.log('Adding style sheet as follows', sheet.innerHTML);

    // Add the sheet to the document
    document.body.appendChild(sheet);
  });
}
init();
