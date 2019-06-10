$(document).ready(function () {

  var $workArr = ["all", "[data-name='print']", "[data-name='animation']", "[data-name='art']", "[data-name='web']", "[data-name='photography']", "[data-name='video']"];

  function resentShow() {
    let indexItem = 0;
    for (let i = 0; i < $workArr.length; i++) {
      $workArr.forEach((item) => {
        $(".work__slider-item").eq(indexItem).on("click", function () {
          if (item == "all") {
            $(".work__slider-box").hide();
            $(".work__slider-box").show(500);
          }
          $(".work__slider-box").show(500);
          $(".work__slider-box").not(item).hide();
        });
        indexItem++;
      });
    }
  }
  resentShow();
});