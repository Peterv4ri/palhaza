$('.pan-wrap').append('<div class="play">play</div>');

var hoverInterval;

function doStuff() {
  $(this).animate({
    'background-position-x': '+=5%',
  }, 250, 'linear');
}

$(function() {
  $('.pan-wrap').hover(
    function() {
      $(this).empty();
      hoverInterval = setInterval($.proxy(doStuff, this), 250);
    },
    function() {
      // stop calling doStuff
      $(this).append('<div class="play">play</div>');
      clearInterval(hoverInterval);
      $('this').animate({
        'background-position-x': '+=5%',
      }, 1000, 'easeOutQuint');
    });
});