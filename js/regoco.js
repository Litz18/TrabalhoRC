function register() {
    var sala = document.getElementById("salaSelect").value;
    var textOcorrencia = document.getElementById("ocorrenciaTextarea").value;
    var dataHoraOcorrencia = document.getElementById("daytime").value;
    var token = localStorage.getItem('token');

    getProfile((userId) => {
        if (userId) {
            fetch('http://57.129.5.101/api/createObservation', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    sala: sala,
                    descricao: textOcorrencia,
                    dataHora: dataHoraOcorrencia,
                    verificado: 0,
                    user_id: userId
                }),
            }).then((response) => response.json())
                .then((responseJson) => {
                    // Adicione um console.log para ver a resposta do servidor
                    console.log('Resposta do servidor:', responseJson);
                
                })
                .catch((error) => {
                    console.log(error);
                    callback(false);
                });
        } else {
            alert("Erro ao obter o ID do usuário");
            callback(false);
        }
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
            callback(responseJson.profile.id);
        })
        .catch((error) => {
            console.log(error);
            callback(null);
        });
}