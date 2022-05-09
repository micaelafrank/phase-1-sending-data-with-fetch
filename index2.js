// Add your code here

fetch('http://localhost:3000/dogs', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        dogName,
        dogBreed
    })
})

.then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  });


function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name,
            email})
    })
    .then(res => res.json())
    .then(data => appendId(data))
    .catch((error) => document.body.innerHTML = error.message);
}

function appendId(newUser){
    const idElement = document.createElement('p');
    idElement.textContent = newUser.id;
    const body = document.querySelector('body');
    body.appendChild(idElement)
    console.log(idElement)
}

submitData()