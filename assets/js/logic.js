const toggle = $('.switch');
const header = $('header');
const body = $('body');
const footer = $('footer');
const aTag = $('a');
const span = $('span');
const h2 = $('h2');

// Dark Mode function
toggle.on('click', function darkMode(){
  if(body.hasClass('dark')){
    body.removeClass('dark');
    header.removeClass('dark');
    footer.removeClass('dark');
    aTag.removeClass('dark');
    span.removeClass('dark');
    h2.removeClass('dark');
    toggle.text('☀️');
  }else{
    body.addClass('dark');
    header.addClass('dark');
    footer.addClass('dark');
    aTag.addClass('dark');
    span.addClass('dark');
    h2.addClass('dark');
    toggle.text('🌒');
  }
});