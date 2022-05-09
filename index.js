// Add your code here

// const newDog = {
//     dogName: "Sparky",
//     dogBreed: "Long-haired weiner dog"
// }

// const appendDogData = {
//     method: 'POST', 
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(newDog)
// };

// fetch('http://localhost:3000/dogs', newDog)
// .then(function (response) {
//     return response.json();
// })
// .then(function (object) {
//     console.log(object);
// });


const newUser = {
    name: "Micaela Frank",
    email: "mickeymickey123@aol.com"
}

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name,
        email
    }),
})
.then(res => res.json())
.then(data => appendId(data))
.catch((error) => document.body.innerHTML = error.message);
}

function appendId(obj){
    const idElement = document.createElement('p');
    idElement.textContent = obj.id;
    const body = document.querySelector('body');
    body.appendChild(idElement)
    console.log(idElement)
}

submitData("Jane Doe", "jane@yahoo.com");