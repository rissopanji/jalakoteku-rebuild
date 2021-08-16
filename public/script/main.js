const btn_menu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btn_menu.addEventListener('click', () =>{
  menu.classList.toggle('hidden');
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