const main = document.querySelector('main');
const back = document.querySelector('#back-btn');

function createBlogPosts() {
  // gets data from localStorage and turns it into an array of objects
  let stringData = localStorage.getItem('Saved Blogs');
  let blogPosts = JSON.parse(stringData) || [];
  console.log(blogPosts);



  for (let i = 0; i < blogPosts.length; i++) {
    const sect = document.createElement('section');
    sect.classList.add('posts');
    let html = `
    <h3>${blogPosts[i].title}</h3>
    <p>${blogPosts[i].content}</p>
    <p class='posted-by'>Posted by ${blogPosts[i].username}</p>
    `
    sect.innerHTML = html;
    main.appendChild(sect);
  }
}

back.addEventListener('click', function () {
  document.location.href = './index.html';
})

createBlogPosts();