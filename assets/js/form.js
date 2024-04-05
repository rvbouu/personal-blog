const form = $('.form');
const username = $('input[id="username"]');
const title = $('input[id="title"]');
const content = $('textarea[id="content"]');

// gets JSON array from localStorage and turns it into a normal array
let stringData = localStorage.getItem('Saved Blogs');
let blogPosts = JSON.parse(stringData);

function formSubmit(event){
  // prevents default behavior
  event.preventDefault();

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

  // clears input fields
  // $('input[type="text"]').val('');
  // $('textarea[type="text"]').val('');
}

function newPage(){
  document.location.href = '/Users/rvbou/Documents/bootcamp/homework/homework4/blog.html';
}

function missingField(){
  if(username.val() == '' || title.val() == '' || content.val() == ''){
    alert('All fields must be filled out.')
  }else{
      formSubmit();
      newPage();
    }
  }

form.on('submit', missingField);