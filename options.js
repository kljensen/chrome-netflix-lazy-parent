// Saves options to chrome.storage and syncs across your account
function save_options() {
  var bannedLabels = document.getElementById('bannedLabels').value;
  chrome.storage.sync.set({
    bannedLabels: bannedLabels
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    bannedLabels: '',
  }, function(items) {
    document.getElementById('bannedLabels').value = items.bannedLabels;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
