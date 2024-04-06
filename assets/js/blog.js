const main = document.querySelector('main');
const back = document.querySelector('#back-btn');

function createBlogPosts() {
  // gets data from localStorage and turns it into an array of objects
  let stringData = localStorage.getItem('Saved Blogs');
  let blogPosts = JSON.parse(stringData) || [];

  // creates individual sections with each object's information
  for (let i = 0; i < blogPosts.length; i++) {
    const sect = document.createElement('section');
    sect.classList.add('posts');

    let html = `
    <h3>${blogPosts[i].title}</h3>
    <p>${blogPosts[i].content}</p>
    <p class='posted-by'>Posted by ${blogPosts[i].username}</p>
    `
    // sets html created to section
    sect.innerHTML = html;

    // adds section element inside main
    main.appendChild(sect);
  }
}

// redirects from blog page to main page
back.addEventListener('click', function () {
  document.location.href = './index.html';
})

// calls createBlogPost function
createBlogPosts();