const toggle = document.querySelector('.switch');
const header = document.querySelector('header');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const aTag = document.querySelectorAll('a');
const span = document.querySelectorAll('span');
const blogName = document.querySelector('#blogName'); // only index.html
const backBtn = document.querySelector('#back-btn'); // only blog.html

// Dark Mode function
// gets localStorage data and sets screen to last setting
let darkMode = localStorage.getItem('darkMode') || 'light'; // if key isn't found in localStorage, sets darkMode to 'light'
let toggleDark = localStorage.getItem('toggleDark');
body.classList.add(darkMode);
header.classList.add(darkMode);
footer.classList.add(darkMode);
// applies class to all a tags
for (let i=0; i < aTag.length; i++) {
  aTag[i].classList.add(darkMode);
}
// applies class to all span tags
for (let i=0; i < span.length; i++) {
  span[i].classList.add(darkMode);
}
// if element is found on page, add dark mode class
if( blogName ){
  blogName.classList.add(darkMode); // only index.html
}

if( backBtn ){
  backBtn.classList.add(darkMode); // only blog.html
}
toggle.textContent = toggleDark;

// when emoji is clicked on page, changes theme accordingly
toggle.addEventListener('click', function() {
  if (body.classList.contains('dark')) {
    // changes from dark to light mode
    body.classList.remove('dark');
    header.classList.remove('dark');
    footer.classList.remove('dark');
    for (let i=0; i < aTag.length; i++) {
      aTag[i].classList.remove('dark');
    }
    for (let i=0; i < span.length; i++) {
      span[i].classList.remove('dark');
    }
    blogName?.classList.remove('dark'); // only index.html
    backBtn?.classList.remove('dark'); // only blog.html
    toggle.textContent = '☀️';
    localStorage.setItem('darkMode', 'light');
    localStorage.setItem('toggleDark', '☀️');
  } else {
    // changes from light to dark mode
    body.classList.add('dark');
    header.classList.add('dark');
    footer.classList.add('dark');
    for (let i=0; i < aTag.length; i++) {
      aTag[i].classList.add('dark');
    }
    for (let i=0; i < span.length; i++) {
      span[i].classList.add('dark');
    }
    blogName?.classList.add('dark'); // only index.html
    backBtn?.classList.add('dark'); // only blog.html
    toggle.textContent = '🌒';
    localStorage.setItem('darkMode', 'dark');
    localStorage.setItem('toggleDark', '🌒');
  }
});