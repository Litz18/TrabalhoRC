function carregarOcorrencias() {
    fetch('http://57.129.5.101/api/getAllObservations')
        .then(response => response.json())
        .then(data => {
            // Limpar a listbox antes de popular com as novas ocorrências
            var ocoSelect = document.getElementById("ocoSelect");
            ocoSelect.innerHTML = '';

            // Popular a listbox com as ocorrências
            data.forEach(ocorrencia => {
                // Adicionar uma opção à listbox com detalhes da ocorrência
                var option = document.createElement("option");
                option.text = `ID: ${ocorrencia.id}, User ID: ${ocorrencia.user_id}, Descrição: ${ocorrencia.descricao}, Sala: ${ocorrencia.sala}`;
                option.value = ocorrencia.id; // Definir o valor da opção como o ID da ocorrência
                ocoSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar ocorrências:', error);
        });
}