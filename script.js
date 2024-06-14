fetch('./EURUSD_last_timestamp.txt')
    .then(response => response.text())
    .then(data => {
        document.getElementById('lastdate').innerHTML = data;
    });
