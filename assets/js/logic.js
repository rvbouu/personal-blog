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
let darkMode = localStorage.getItem('darkMode');
let toggleDark = localStorage.getItem('toggleDark');
body.setAttribute('class',darkMode);
header.setAttribute('class',darkMode);
footer.setAttribute('class',darkMode);
// applies class to all a tags
for (var i=0; i < aTag.length; i++) {
  aTag[i].setAttribute("class", darkMode);
}
// applies class to all span tags
for (var i=0; i < span.length; i++) {
  span[i].setAttribute("class", darkMode);
}
blogName.setAttribute('class',darkMode); // only index.html
toggle.textContent = toggleDark;

toggle.addEventListener('click', function() {
  if (body.classList.contains('dark')) {

    body.removeAttribute('class', 'dark');
    header.removeAttribute('class','dark');
    footer.removeAttribute('class','dark');
    for (var i=0; i < aTag.length; i++) {
      aTag[i].removeAttribute("class", 'dark');
    }
    for (var i=0; i < span.length; i++) {
      span[i].removeAttribute("class", 'dark');
    }
    blogName.removeAttribute('class','dark'); // only index.html
    toggle.textContent = '☀️';
    localStorage.setItem('darkMode', '');
    localStorage.setItem('toggleDark', '☀️');
  } else {
    body.setAttribute('class','dark');
    header.setAttribute('class','dark');
    footer.setAttribute('class','dark');
    for (var i=0; i < aTag.length; i++) {
      aTag[i].setAttribute("class", 'dark');
    }
    for (var i=0; i < span.length; i++) {
      span[i].setAttribute("class", 'dark');
    }
    blogName.setAttribute('class','dark'); // only index.html
    toggle.textContent = '🌒';
    localStorage.setItem('darkMode', 'dark');
    localStorage.setItem('toggleDark', '🌒');
  }
});