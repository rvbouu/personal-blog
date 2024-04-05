const toggle = document.querySelector('.switch');
const header = document.querySelector('header');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const aTag = document.querySelectorAll('a');
const span = document.querySelectorAll('span');
const blogName = document.querySelector('#blogName'); // only index.html
console.log(toggle);
// Dark Mode function
// gets localStorage data and sets screen to last setting
let darkMode = localStorage.getItem('darkMode') || 'light';
let toggleDark = localStorage.getItem('toggleDark');
console.log(darkMode);

body.classList.add(darkMode);
header.classList.add(darkMode);
footer.classList.add(darkMode);
// applies class to all a tags
for (var i=0; i < aTag.length; i++) {
  aTag[i].classList.add(darkMode);
}
// applies class to all span tags
for (var i=0; i < span.length; i++) {
  span[i].classList.add(darkMode);
}

if( blogName ){
  blogName.classList.add(darkMode); // only index.html
}
toggle.textContent = toggleDark;


// span.classList.add(')


toggle.addEventListener('click', function() {
  if (body.classList.contains('dark')) {

    body.classList.remove('class', 'dark');
    header.classList.remove('class','dark');
    footer.classList.remove('class','dark');
    for (var i=0; i < aTag.length; i++) {
      aTag[i].classList.remove("class", 'dark');
    }
    for (var i=0; i < span.length; i++) {
      span[i].classList.remove("class", 'dark');
    }
    blogName?.classList.remove('class','dark'); // only index.html
    toggle.textContent = '☀️';
    localStorage.setItem('darkMode', 'light');
    localStorage.setItem('toggleDark', '☀️');
  } else {
    body.classList.add('class','dark');
    header.classList.add('class','dark');
    footer.classList.add('class','dark');
    for (var i=0; i < aTag.length; i++) {
      aTag[i].classList.add("class", 'dark');
    }
    for (var i=0; i < span.length; i++) {
      span[i].classList.add("class", 'dark');
    }
    blogName?.classList.add('class','dark'); // only index.html
    toggle.textContent = '🌒';
    localStorage.setItem('darkMode', 'dark');
    localStorage.setItem('toggleDark', '🌒');
  }
});