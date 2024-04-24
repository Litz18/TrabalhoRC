function registar(callback) {
    var tipoConta = document.getElementById("tipo").value;
    var Username = document.getElementById("usuario").value;
    var Password = document.getElementById("password").value;
    var Nome = document.getElementById("nome").value;
    var token = localStorage.getItem('token');

    fetch('http://57.129.5.101/api/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            username: Username,
            password: Password,
            tipoConta: tipoConta,
            name: Nome
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson    .username != "")
            {
                alert("Conta criada com sucesso")
            }
            else
            {
                alert("Falhou")
            }
        })
        .catch((error) => {
            console.log(error);
            callback(false)
        });
    }