const toggle = $('.switch');
const header = $('header');
const body = $('body');
const footer = $('footer');
const aTag = $('a');
const span = $('span');
const h2 = $('h2');

// Dark Mode function
// gets localStorage data and sets screen to last setting
let darkMode = localStorage.getItem('darkMode');
let toggleDark = localStorage.getItem('toggleDark');
body.addClass(darkMode);
header.addClass(darkMode);
footer.addClass(darkMode);
aTag.addClass(darkMode);
span.addClass(darkMode);
h2.addClass(darkMode);
toggle.text(toggleDark);

toggle.on('click', function darkMode(){
  if(body.hasClass('dark')){
    body.removeClass('dark');
    header.removeClass('dark');
    footer.removeClass('dark');
    aTag.removeClass('dark');
    span.removeClass('dark');
    h2.removeClass('dark');
    toggle.text('☀️');
    localStorage.setItem('darkMode', '');
    localStorage.setItem('toggleDark', '☀️');
  }else{
    body.addClass('dark');
    header.addClass('dark');
    footer.addClass('dark');
    aTag.addClass('dark');
    span.addClass('dark');
    h2.addClass('dark');
    toggle.text('🌒');
    localStorage.setItem('darkMode', 'dark');
    localStorage.setItem('toggleDark', '🌒');
  }
});