fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayData(data))
.catch(error => console.log('ERRO TYPE:' , error))

function displayData(data) {
  let title = `<h1>Comment</h1>`
  
  for (let item of data) {
    title += `<div class='card'>
    <h2>${item.name}</h2>
    <p>${item.body}</p/>
    <span><ion-icon name="person-outline"></ion-icon> ${item.email}</span>
    </div>`
  }
  document.getElementById('container').insertAdjacentHTML('beforeend', title)
}