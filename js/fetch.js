function addData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
}

document.getElementById('allData').addEventListener('click', function(){
    addData();
})