// Keep hash in internal page links to allow for back button
// Explanation: https://github.com/kswedberg/jquery-smooth-scroll#fnsmoothscroll
// Original code: https://github.com/kswedberg/jquery-smooth-scroll/blob/master/demo/hashchange.html

// Bind the hashchange event listener
$(window).bind('hashchange', function(event) {
  $.smoothScroll({
    // Replace '#/' with '#' to go to the correct target
    scrollTarget: location.hash.replace(/^\#\/?/, '#')
  });
});
$('a[href*="#"]')
.bind('click', function(event) {
  // Remove '#' from the hash.
  var hash = this.hash.replace(/^#/, '')
  if (this.pathname === location.pathname && hash) {
    event.preventDefault();
    // Change '#' (removed above) to '#/' so it doesn't jump without the smooth scrolling
    location.hash = '#/' + hash;
  }
});
// Trigger hashchange event on page load if there is a hash in the URL.
if (location.hash) {
  $(window).trigger('hashchange'); 
}