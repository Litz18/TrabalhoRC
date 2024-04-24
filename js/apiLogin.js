function login(callback) {
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;


    fetch('http://57.129.5.101/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: Username,
            password: Password,
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.token != null) {
                localStorage.setItem('token', responseJson.token)
                callback(true)
            }
            else {
                callback(false)
            }


        })
        .catch((error) => {
            console.log(error);
            callback(false)
        });
    }


function getProfile(callback) {
    var token = localStorage.getItem('token');

    fetch('http://57.129.5.101/api/getProfile', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }).then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)   
            callback(responseJson.profile.tipoConta);
        })
        .catch((error) => {
            console.log(error);
            callback(null);
        });
}

function verifyLogin() {
    login((loggedIn) => {
    if (loggedIn){
        getProfile((getaccount) => {
            if (getaccount == "Admin") {
                window.location.replace("admin.html")
            } else if (getaccount == "Professor") {
                window.location.replace("professormenu.html");
            }else if (getaccount == "Tecnico") {
                window.location.replace("tecnico.html");
            }
        });
    } else {
        alert("ERRO! Password Incorreta");
    }
    });
}

