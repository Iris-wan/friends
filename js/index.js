var menuBars = document.querySelector('.menu_bars');
var navList = document.querySelector('.nav_list');
var nav = document.querySelector('.nav');

menuBars.addEventListener('click', function() {
    menuBars.classList.toggle('change');
    navList.classList.toggle('change');
    nav.classList.toggle('change');
    var main = document.getElementById('main');
    var footer = document.getElementById('footer');
    if(main.style.display !== 'none') {
        main.style.display = 'none';
        footer.style.display = 'none';
    } else {
        main.style.display = 'block';
        footer.style.display = 'block';
    }
});
