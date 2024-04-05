const form = document.querySelector('.form');
const username = document.querySelector('input[id="username"]')
const title = document.querySelector('input[id="title"]');
const content = document.querySelector('textarea[id="content"]');

// gets JSON array from localStorage and turns it into a normal array
let stringData = localStorage.getItem('Saved Blogs');
let blogPosts = JSON.parse(stringData) || [];

function formSubmit() {
  // object to hold each blog's data
  let blogInfo = {
    username: username.value,
    title: title.value,
    content: content.value
  }

  // adds object to array
  blogPosts.push(blogInfo);

  // turns array into JSON array
  const savedBlogs = JSON.stringify(blogPosts);

  // saves JSON array to localStorage
  localStorage.setItem('Saved Blogs', savedBlogs);

  // redirects from main page to blog page
  document.location.href = './blog.html';
}

function missingField(event) {
  // prevents default behavior
  event.preventDefault();

  // checks to see if all fields are filled out
  if (username.value == '' || title.value == '' || content.value == '') {
    // if a field is missing, alert message pops up
    alert('All fields must be filled out.')
  } else {
    // if all fields are filled, call formSubmit function
    formSubmit();
  }
}

// calls missingField function on click
form.addEventListener('submit', missingField);