!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1),o(2),o(3),o(4),o(5),o(6)},function(e,t){$(document).ready(function(){$(".fa-toggle-on").click(function(){$(this).toggleClass("open"),$(".header__logo").toggle(),$(".menu").toggle(),$(".header__content").toggle()})})},function(e,t){$(document).ready(function(){$(".header-next").on("click",function(){$(this).fadeOut("fast"),$(".header__button").fadeOut("fast"),$(".header__text--hidden, .header-close").fadeIn("slow")}),$(".header-close").on("click",function(){$(this).fadeOut("fast"),$(".header__button").fadeIn("slow"),$(".header__text--hidden").fadeOut("fast"),$(".header-next").fadeIn("fast")})})},function(e,t){!function(e){e(function(){e(".services-block__buttons").on("click",".services-block__button:not(.services-focus)",function(){e(this).addClass("services-focus").siblings().removeClass("services-focus").closest(".services-wrapper").find(".services-block__wrapper").removeClass("services-active").eq(e(this).index()).addClass("services-active")})})}(jQuery)},function(e,t){$(document).ready(function(){var e=[,"[data-name='print']","[data-name='animation']","[data-name='art']","[data-name='web']","[data-name='photography']","[data-name='video']"],t=function(e,t){$(".recent__slider-item").eq(e).on("click",function(){$(this),$(".recent__slider-box").show(500),$(".recent__slider-box").not(t).hide(),0==e&&$(".recent__slider-box").show(500)})};t(0,e[0]),t(1,e[1]),t(2,e[2]),t(3,e[3]),t(4,e[4]),t(5,e[5]),t(6,e[6])})},function(e,t){!function(e){e(".box-left__nav").on("click",".box-left__btn:not(.study-active)",function(){var o=e(this).index();e(this).addClass("study-active").siblings().removeClass("study-active"),t(o)});var t=function(t){0===t?(e(".study .box-left__title").text("ACCUMULATE CREATIVE IDEAS"),e(".study .box-left__icon i").removeClass().addClass("far fa-lightbulb"),e(".study .box-left__text").text("Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has been the setting let")):1===t?(e(".study .box-left__title").text("Lorem 2"),e(".study .box-left__icon i").removeClass().addClass("fas fa-glasses"),e(".study .box-left__text").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi temporibus quo architecto ipsum eaque.")):(e(".study .box-left__title").text("Lorem 3"),e(".study .box-left__icon i").removeClass().addClass("fas fa-comments"),e(".study .box-left__text").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam iusto magni quo vel quod animi illo modi eveniet est, aperiam non, aspernatur possimus placeat exercitationem officiis odit ratione magnam veritatis quidem. Rerum, velit? Odio quasi modi perspiciatis commodi? Enim, itaque?"))}}(jQuery)},function(e,t){$(document).ready(function(){$(".box__button--open").on("click",function(){$(this).toggleText("Read More","Close"),e($(this)),t($(this)),o($(this))}),$.fn.extend({toggleText:function(e,t){return this.text(this.text()==t?e:t)},toggleBg:function(e,t){return this.css(this.css("background-color")==t?e:t)}});var e=function(e){"none"==$(".box__text--hidden").css("display")?e.closest(".blog__box").find(".box__text--hidden").slideToggle("slow"):e.closest(".blog__box").find(".box__text--hidden").slideToggle("fast")},t=function(e){e.closest(".blog__box").find(".box--left").fadeToggle(300)},o=function(e){e.closest(".blog__box").toggleClass("box-target")}})}]);