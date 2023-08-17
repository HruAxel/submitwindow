document.forms[0].onsubmit = function(e) {
    e.preventDefault();

fetch('process.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        password_confirmation: document.getElementById('password_confirmation').value,
    })
})
    .then(function(adatok){
       return adatok.json()
    })
    .then(function(adatok) {

        if(adatok.status == 'error') {
            document.getElementById('info').innerHTML = adatok.errors.map(function(error){
                return `<p style = "color:red">${error} </p>`
            }).join('')
        }
        else{
            document.getElementById('info').innerHTML = `<p style= "color: green">${adatok.message} </p>`
        }

        })
     }
