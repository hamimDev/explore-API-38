function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(response => response.json())
    .then(json=> dataUsers(json))
}

function dataUsers(json){
    console.log(json);
}

document.getElementById('allUser').addEventListener('click', function(){
    loadUsers();
})