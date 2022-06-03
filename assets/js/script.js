"use strict";
$(document).ready(function () {

  // Анімація AOS

  AOS.init();
  window.addEventListener("load", AOS.refresh);
  AOS.init({
    once: true
  })

  // Плавне гортання сторінки
  
  $(".goto").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
          scrollTop: $(hash).offset().top,
        },
        2000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Кнопка «нагору»

  var button = $('#button-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 200);
    return false;
  });

  // Меню-бургер

  const navbarMenu = document.getElementById("menu");
  const burgerMenu = document.getElementById("burger");
  const bgOverlay = document.querySelector(".overlay");

  if (burgerMenu && bgOverlay) {
    burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      bgOverlay.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.toggle("is-active");
    });
  }

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.remove("is-active");
    });
  });

  const searchBlock = document.querySelector(".search-block");
  const searchToggle = document.querySelector(".search-toggle");
  const searchCancel = document.querySelector(".search-cancel");

  if (searchToggle && searchCancel) {
    searchToggle.addEventListener("click", () => {
      searchBlock.classList.add("is-active");
    });

    searchCancel.addEventListener("click", () => {
      searchBlock.classList.remove("is-active");
    });
  }
});

// Плавне гортання сторінки до якорів

$('.js-anchor-link').click(function (e) {
  e.preventDefault();
  var target = $($(this).attr('href'));
  if (target.length) {
    var scrollTo = target.offset().top;
    $('body, html').animate({
      scrollTop: scrollTo + 'px'
    }, 800);
  }
});