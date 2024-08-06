const blogPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value


    const response = await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    // alert user of success or fails
    if (response.ok) {
        alert('Succesfully posted!')
        document.location.replace('/dashboard')
    } else {
        alert('Failed to create post :(')
    }
}

document
    .querySelector('.blogpost-form')
    .addEventListener('submit', blogPostFormHandler);
