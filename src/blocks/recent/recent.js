$(document).ready(function () {

  var $recent = [, "[data-name='print']", "[data-name='animation']", "[data-name='art']", "[data-name='web']", "[data-name='photography']", "[data-name='video']"];

  var resentShow = function (num, recetItem) {
    $(".recent__slider-item").eq(num).on("click", function () {
      $(this)
      $(".recent__slider-box").show(500);
      $(".recent__slider-box").not(recetItem).hide();
      if (num == 0) {
        $(".recent__slider-box").show(500);
      }
    });

  };

  resentShow(0, $recent[0]);
  resentShow(1, $recent[1]);
  resentShow(2, $recent[2]);
  resentShow(3, $recent[3]);
  resentShow(4, $recent[4]);
  resentShow(5, $recent[5]);
  resentShow(6, $recent[6]);

});