
function addStyleSheet(items) {
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
}

function watchDOM(items) {
  var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          console.log(mutation.type);
      });
  });
  var config = { attributes: true, childList: true, characterData: true }
  observer.observe(document, config);
}

function init() {
  // Get our list of bannedLabels, one per line.
  chrome.storage.sync.get({
    bannedLabels: '',
  }, function(items) {
    addStyleSheet(items);
    // TODO: play with the MutationObserver API
    // watchDOM(items);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  init();
});
