var menuBars = document.querySelector('.menu_bars');
var navList = document.querySelector('.nav_list');
var nav = document.querySelector('.nav');

menuBars.addEventListener('click', function() {
    menuBars.classList.toggle('change');
    navList.classList.toggle('change');
    nav.classList.toggle('change');
    var main = document.querySelector('.main');
    var footer = document.getElementById('footer');
    if(main.style.display !== 'none') {
        main.style.display = 'none';
        footer.style.display = 'none';
    } else {
        main.style.display = 'block';
        footer.style.display = 'block';
    }
});

var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var funFact1 = document.querySelector('#funFact1')
var funFact2 = document.querySelector('#funFact2')
var funFact3 = document.querySelector('#funFact3')
button1.addEventListener('click', function() {
    button1.style.boxShadow = "5px 5px 25px 2px #E91E23";
    button2.style.boxShadow = "";
    button3.style.boxShadow = "";
    if (funFact1.style.display !== 'block') {
        funFact1.style.display = 'block';
    }
    if (funFact2.style.display !== 'none') {
        funFact2.style.display = 'none';
    }
    if (funFact3.style.display !== 'none') {
        funFact3.style.display = 'none';
    }
})

button2.addEventListener('click', function() {
    button2.style.boxShadow = "5px 5px 25px 2px #02B2E7";
    button1.style.boxShadow = "none";
    button3.style.boxShadow = "none";
    if (funFact2.style.display !== 'block') {
        funFact2.style.display = 'block';
    }
    if (funFact1.style.display !== 'none') {
        funFact1.style.display = 'none';
    }
    if (funFact3.style.display !== 'none') {
        funFact3.style.display = 'none';
    }
})

button3.addEventListener('click', function() {
    button3.style.boxShadow = "5px 5px 25px 2px #FABC16";
    button1.style.boxShadow = "none";
    button2.style.boxShadow = "none";
    if (funFact3.style.display !== 'block') {
        funFact3.style.display = 'block';
    }
    if (funFact1.style.display !== 'none') {
        funFact1.style.display = 'none';
    }
    if (funFact2.style.display !== 'none') {
        funFact2.style.display = 'none';
    }
})