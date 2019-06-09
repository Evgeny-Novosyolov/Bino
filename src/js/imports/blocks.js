$(document).ready(function () {

 var scroollBox = function (a, b) {
    let boxParent = a;
    let boxChild = b;

    $(window).scroll(function () {
      if ($(boxParent).offset().top <= $(window).scrollTop() + 700) {
        $(boxChild).addClass("jackInTheBox");
        
      }
    })
  }
 
  var $section = {
    features: [".features-wrapper", ".features__block"],
    history: [".history-wrapper", ".history__box"],
    services: [".services-wrapper", ".services__box--left"],
    study: [".study-wrapper", ".study-main__box"],
    catalog: [".catalog__block", ".catalog__box"],
    pricing: [".pricing-main__block", ".pricing-main__block"],
    touch: [".touch__block", ".touch__box"],
    blog: [".blog-container", ".blog__block"]
  }



  scroollBox($section.features[0], $section.features[1]);
  scroollBox($section.history[0], $section.history[1]);
  scroollBox($section.services[0], $section.services[1]);
  scroollBox($section.study[0], $section.study[1]);
  scroollBox($section.catalog[0], $section.catalog[1]);
  scroollBox($section.pricing[0], $section.pricing[1]);
  scroollBox($section.touch[0], $section.touch[1]);
  scroollBox($section.blog[0], $section.blog[1]);

  
  // class Rectangle {
  //   constructor(boxChild, boxParent) {
  //     this.boxChild = boxChild;
  //     this.boxParent = boxParent;
  //   }

  //   get showBox() {
  //     return this.scroollBox()
  //   }



  //   scroollBox() {
  //     let boxParent = this.boxChild;
  //     let boxChild = this.boxParent;

  //     $(window).scroll(function () {
  //       if ($(boxParent).offset().top <= $(window).scrollTop() + 300) {
  //         $(boxChild).addClass("fadeInUp");
  //         // return this.scroollBox()
  //       }
  //     })
  //   }

  // }

  // const square = new Rectangle(".blog-container", ".blog__block");
  // square.showBox()




  $(".span-scroll").on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  })



});