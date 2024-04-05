const form = $('.form');
const username = $('input[id="username"]');
const title = $('input[id="title"]');
const content = $('textarea[id="content"]');

// gets JSON array from localStorage and turns it into a normal array
let stringData = localStorage.getItem('Saved Blogs');
let blogPosts = JSON.parse(stringData) || [];

function formSubmit() {
  // object to hold each blog's data
  let blogInfo = {
    username: username.val(),
    title: title.val(),
    content: content.val()
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
  if (username.val() == '' || title.val() == '' || content.val() == '') {
    // if a field is missing, alert message pops up
    alert('All fields must be filled out.')
  } else {
    // if all fields are filled, call formSubmit function
    formSubmit();
  }
}

// calls missingField function on click
form.on('submit', missingField);