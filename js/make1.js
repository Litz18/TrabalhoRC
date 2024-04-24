function Caoc() {
    var selectedSalaId = document.getElementById('salaSelect').value;
    var token = localStorage.getItem('token');
    
    fetch(`http://57.129.5.101/api/getObservationBySala/${selectedSalaId}`, {
        method: 'GET',  
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar as ocorrências');
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
        if (Array.isArray(data.observations)) {
            var selectOcorrencias = document.getElementById("ocoSelect");
            selectOcorrencias.innerHTML = "";
            data.observations.filter(ocorrencia => ocorrencia.verificado === 0).forEach(ocorrencia => {
                var option = document.createElement("option");
                option.value = ocorrencia.id;
                option.textContent = `ID: ${ocorrencia.id}`;
                selectOcorrencias.appendChild(option);
            });
        }
    })
    .catch(error => console.error(error));
}

function CaocT() {
    var token = localStorage.getItem('token');
    
    fetch(`http://57.129.5.101/api/getAllObservations/`, {
        method: 'GET',  
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar as ocorrências');
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
        if (Array.isArray(data.Observations)) { // Corrigindo para Observations com "O" maiúsculo
            var selectOcorrencias = document.getElementById("ocoSelect");
            selectOcorrencias.innerHTML = "";
            data.Observations.filter(ocorrencia => ocorrencia.verificado === 0).forEach(ocorrencia => {
                var option = document.createElement("option");
                option.value = ocorrencia.id;
                option.textContent = `ID: ${ocorrencia.id}`;
                selectOcorrencias.appendChild(option);
            });
        }
    })
    .catch(error => console.error(error));
}

function mcv() {
    var idOcorrenciaSelecionado = document.getElementById("ocoSelect").value; // Corrigido para ocoSelect
    var token = localStorage.getItem('token');
    fetch('http://57.129.5.101/api/resolveObservation', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            idObservation: idOcorrenciaSelecionado, // Corrigido para idObservation
            verificado: 1,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Erro ao marcar a ocorrência como verificada:', error));
}