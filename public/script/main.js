const btn_menu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btn_menu.addEventListener('click', () =>{
  menu.classList.toggle('hidden');
})