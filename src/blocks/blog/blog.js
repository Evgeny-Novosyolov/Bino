$(document).ready(function () {


  $('.box__button--open').on("click", function () {
    $(this).toggleText('Read More', 'Close');

    openText($(this));
    openBox($(this));
    boxTarget($(this));
  });


  $.fn.extend({
    toggleText: function (a, b) {
      return this.text(this.text() == b ? a : b);
    },
  });


  var openText = function (target) {
    if ($(".box__text--hidden").css('display') == 'none') {
      target.closest('.blog__box')
        .find(".box__text--hidden").slideToggle("slow");
    } else {
      target.closest('.blog__box')
        .find(".box__text--hidden").slideToggle("fast");
    }
  };

  var openBox = function (target) {
    target.closest('.blog__box')
      .find('.box--left').fadeToggle(300);
  };

  var boxTarget = function (target) {
    target.closest('.blog__box').toggleClass("box-target");
  };
});