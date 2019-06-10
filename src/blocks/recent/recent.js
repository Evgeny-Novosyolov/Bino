$(document).ready(function () {

  var $recentArr = ["all", "[data-name='print']", "[data-name='animation']", "[data-name='art']", "[data-name='web']", "[data-name='photography']", "[data-name='video']"];

  function resentShow() {
    let indexItem = 0;
    for (let i = 0; i < $recentArr.length; i++) {
      $recentArr.forEach((item) => {
        $(".recent__slider-item").eq(indexItem).on("click", function () {
          if (item == "all") {
            $(".recent__slider-box").hide();
            $(".recent__slider-box").show(500);
          }
          $(".recent__slider-box").show(500);
          $(".recent__slider-box").not(item).hide();
        })
        indexItem++
      })
    }
  }
  resentShow()
});