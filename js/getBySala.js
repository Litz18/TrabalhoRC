
function getObBySala() {
    var salaSelect = document.getElementById('salaSelect');
    var selectedSalaId = salaSelect.value;
    
    var token = localStorage.getItem('token');
    fetch(`http://57.129.5.101/api/getObservationBySala/${selectedSalaId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    }).then((response) => response.json())
        .then((responseJson) => {
            const observations = responseJson.observations;
            if (observations && observations.length > 0) {
                var tbody = document.getElementById('observationsData');
                tbody.innerHTML = '';

                for (const observation of observations) {
                    var row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${observation.id}</td>
                        <td>${observation.user_id}</td>
                        <td>${observation.descricao}</td>
                        <td>${observation.sala}</td>
                        <td>${observation.dataHora}</td>
                        <td>${observation.verificado}</td>
                    `;
                    tbody.appendChild(row);
                }
            } else {
                console.log("Não há observações disponíveis.");
            }
        })
        .catch((error) => {
            console.log(error); 
        });
}