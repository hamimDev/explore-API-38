function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>dataPosts(data))
}

loadPosts();

function dataPosts(data){
    const postContainer = document.getElementById('post-container');
    for(const post of data){
        const div = document.createElement('div');
        div.classList.add('post')
        console.log(post);
        div.innerHTML = `
        <h4>
        Id: ${post.id}
        </h4>
        <h4>
        User Id: ${post.userId}
        </h4>
        <h5>
            Post: ${post.title}
        </h5>
        <p>
            Post Description: ${post.body}
        </p>
            `;
        postContainer.appendChild(div);
    }
}