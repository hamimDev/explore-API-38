function loadUsers2(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(response=>response.json())
    .then(data=>dataUsers2(data))
}

function dataUsers2(data){
    const ul = document.getElementById('Users-list');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}



// document.getElementById('loadUsers').addEventListener('click', function(){
    
// })