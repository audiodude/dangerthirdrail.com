$(function() {
  function refreshFromHash() {
    var hash = window.location.hash;
    $('section').hide();
    if (hash) {
      $(hash).show();
    } else {
      $('#radio-machine').show();
    }
  }

  $(window).on("hashchange", refreshFromHash);
  refreshFromHash();
});
