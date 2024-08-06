const blogPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value
console.log(title)

   fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({title, content}),
        headers: {'Content-Type': 'application/json'},
    });

    // alert user somehow
}

document
.querySelector('.blogpost-form')
.addEventListener('submit', blogPostFormHandler);
