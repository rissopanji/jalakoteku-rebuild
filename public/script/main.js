const btn_menu = document.getElementById('btn-menu');
const open_menu = document.getElementById('open-menu');
const close_menu = document.getElementById('close-menu');
const menu = document.getElementById('menu');

btn_menu.addEventListener('click', () =>{
  menu.classList.toggle('hidden');
  open_menu.classList.toggle('hidden');
  close_menu.classList.toggle('hidden');
})

// ADD CLASS ON NAVBAR WHEN SCROLL
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('nav').removeClass('lg:shadow-none lg:py-3 lg:text-base');
    $('nav').addClass('lg:shadow-md lg:bg-gray1 lg:py-1 lg:text-sm');
    $('#logobrand').removeClass('lg:h-14');
    $('#logobrand').addClass('lg:h-10');
  } else {
    $('nav').removeClass('lg:shadow-md lg:py-1 lg:bg-gray1 lg:text-sm');
    $('nav').addClass('lg:shadow-none lg:py-3 lg:text-base');
    $('#logobrand').removeClass('lg:h-10');
    $('#logobrand').addClass('lg:h-14');
  }
})

// CAROUSEL
$(document).ready(function(){
  $('#home1.owl-carousel').owlCarousel({
    items:1,
    loop: true,
    margin:25,
    autoHeight:false,
    responsiveClass: true,
    responsive: {
      0 : {
        nav: true,
        dots: false,
      },
      1024 : {
        nav: true,
      }
    },
  });
  $('#home2.owl-carousel').owlCarousel({
    items:1,
    loop: true,
    margin:25,
    dots: false,
    autoHeight:false,
    responsiveClass: true,
    responsive: {
      0 : {
        nav: false,
        dots: true
      },
      1024 : {
        nav: true
      }
    }
  });
  $('#home4.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    center: false,
    dots: true,
    autoHeight:true,
    responsive: {
      0 : {
        items: 1,
      },
      680 : {
        items: 2,
      },
      1024 : {
        items:3,
      }
    }
  });

  // Product Page
  $('#product-banner.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    center: false,
    dots: false,
    autoHeight:true,
    items: 1,
    nav: true
  });
});