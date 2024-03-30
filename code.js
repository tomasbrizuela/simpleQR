let text = document.getElementById('textArea');
let scan = document.getElementById('scan');
let bulk = document.getElementById('bulk');
let img = document.getElementById('results');
let descargar = document.getElementById('descargar');
let click = document.getElementById('downl');
let enlace;
let url;


scan.addEventListener('click', function () {
    url = text.value;
    let apiUrl = `http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=500x500`;
    enlace = apiUrl;
    img.src = apiUrl;
    img.style.width = '170px';

    fetch(enlace)
        .then(response => response.blob())
        .then(blob => {
            var enlaceDescarga = document.createElement('a');
            enlaceDescarga.href = URL.createObjectURL(blob);
            enlaceDescarga.download = `${url}.png`;
            document.body.appendChild(enlaceDescarga);
            enlaceDescarga.click();
            document.body.removeChild(enlaceDescarga);
        })

})


// bulk.addEventListener('click', function () {
//     fetch(enlace)
//         .then(response => response.blob())
//         .then(blob => {
//             var enlaceDescarga = document.createElement('a');
//             enlaceDescarga.href = URL.createObjectURL(blob);
//             enlaceDescarga.download = `${url}.png`;
//             document.body.appendChild(enlaceDescarga);
//             enlaceDescarga.click();
//             document.body.removeChild(enlaceDescarga);
//         })
// })
