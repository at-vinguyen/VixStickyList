/**
 * Vis Sticky List v1.0.0
 * @author Vix Nguyen
 * @published at 10:00PM Feb 18, 2020
 */
var VixList = (function(){
  function sticky (selector) {
    // select an element(*) that was declared to use the sticky module
    var $sticker = document.querySelector(selector);
    // apply sticky styles to the (*) element by specifying the class name
    $sticker.classList.add('vix-list');
    // select all LI elements where the parent is the (*) element
    var $items = $sticker.querySelectorAll(selector + ' > li');
    for(var i = 0, length = $items.length ; i < length; i++) {
      // apply sticky styles to each li item
      $items[i].classList.add('vix-item');
      // select the title of LI item and then apply sticky styles to it
      $items[i].querySelector('h1, h2, h3, h4, h5, h6').classList.add('vix-item-title');
    }
  }
  return {
    sticky: sticky
  };
})();
