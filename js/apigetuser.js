function getAllUsers() {
    var token = localStorage.getItem('token');
    fetch('http://57.129.5.101/api/getUsers', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    }).then((response) => response.json())
        .then((responseJson) => {
            var userData = document.getElementById('userData');
            userData.innerHTML = '';

            responseJson.users.forEach(function(user) {
                var row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.username}</td>
                    <td>${user.name}</td>
                `;
                
                userData.appendChild(row);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}
