(function ($) {



  $(".box-left__nav").on("click", ".box-left__btn:not(.study-active)", function () {
    var num = ($(this).index());
    $(this)
      .addClass("study-active")
      .siblings()
      .removeClass("study-active");
    showText(num);
    // console.log(a)


  });
  var showText = function (num) {
    if (num === 0) {
      $('.study .box-left__title').text('ACCUMULATE CREATIVE IDEAS')
      $('.study .box-left__icon i').removeClass().addClass("far fa-lightbulb");
      $('.study .box-left__text').text("Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let");
    } else if (num === 1) {
      $('.study .box-left__title').text("Lorem 2");
      $('.study .box-left__icon i').removeClass().addClass("fas fa-glasses");
      $('.study .box-left__text').text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi temporibus quo architecto ipsum eaque.");
    } else {
      $('.study .box-left__title').text("Lorem 3");
      $('.study .box-left__icon i').removeClass().addClass("fas fa-comments");
      $('.study .box-left__text').text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam iusto magni quo vel quod animi illo modi eveniet est, aperiam non, aspernatur possimus placeat exercitationem officiis odit ratione magnam veritatis quidem. Rerum, velit? Odio quasi modi perspiciatis commodi? Enim, itaque?");
    }

  }


})(jQuery);