function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    fetch('http://57.129.5.101/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.token != null) {
                alert("Iniciou sessão com sucesso!");
            }
            else {
                alert("Email ou password incorretos");
            }


        })
        .catch((error) => {
            console.log(error);
        });
}
