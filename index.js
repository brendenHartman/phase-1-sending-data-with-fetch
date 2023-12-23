function submitData(name, email) {
    return fetch('http://localhost:3000/users',
        {method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
         },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(function(resp){return resp.json();})
    .then(function(json){ 
        const id = json.id;
        const newNum = document.createElement('p');
        newNum.textContent = id;
        document.body.appendChild(newNum);
    })
    .catch(function(error){
        const newError = document.createElement('p');
        newError.textContent = error.message;
        document.body.appendChild(newError);
    })
}
