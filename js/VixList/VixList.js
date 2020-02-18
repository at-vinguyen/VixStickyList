var VixList = (function(){
  function sticky (selector) {
    var $sticker = document.querySelector(selector);
    $sticker.classList.add('vix-list');
    var $items = $sticker.querySelectorAll(selector + ' > li');
    for(var i = 0, length = $items.length ; i < length; i++) {
      $items[i].classList.add('vix-item');
      $items[i].querySelector('h1, h2, h3, h4, h5, h6').classList.add('vix-item-title');
    }
  }
  return {
    sticky: sticky
  };
})();
