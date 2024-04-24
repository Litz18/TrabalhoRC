function date() {
    var datetimeInput = document.getElementById("birthdaytime").value.replace("T","-");
    const date = datetimeInput.split('')
    date[10] = " "
    return date.join("")
}

function register() {
    sala = document.getElementById("salaSelect");
    descricao = document.getElementById("ocorrenciaTextarea");
    data = date();

    fetch('http://57.129.5.101/api/createObservation', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sala: sala,
            descricao: descricao,
            dataHora: data
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.token != null) {
                alert("Ocorrencia Resgistada");
            }
            else {
                alert("Falha");
            }


        })
        .catch((error) => {
            console.log(error);
        });
}

