const commentHandler = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector('#content').value.trim();

const response = await fetch('/api/blog/comment', {
    method: 'POST',
    body: JSON.stringify({content}),
    headers: {'Content-Type': 'application/json'},
});

if (response.ok) {
   alert('Comment succesfull!')
   document.location.reload();
  } else {
    alert('Failed to comment.');
  }

}

document
.querySelector('.comment-form')
.addEventListener('submit',commentHandler);