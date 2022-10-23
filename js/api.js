/* document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value)
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}; 

var txtInput = document.querySelector('#txtInput');
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(txtInput.textContent);
    toSpeak.voice = voices[6];
    synth.speak(toSpeak);
});

function PopulateVoices() {
    voices = synth.getVoices();
    voices.forEach((item, index) => console.log(item.name, index));
} */


function traer() {
    fetch('https://mocki.io/v1/76ad9419-d8d8-4bb1-b626-5bed040853a1')
        .then(res => res.json())
        .then(res => {
        console.log(res)
        comentario1.innerHTML = `
    <h4>${res.comentarios[0].titulo}</h4>
    <p id="txtInput">${res.comentarios[0].comentario}</p>
    <footer class="info-articulo">
        <img src="${res.comentarios[0].foto}" alt="${res.comentarios[0].nombre}">
            <cite>
                <a href="${res.comentarios[0].linkedin}" target="_blank"
                    class="fa-brands fa-linkedin" aria-hidden="true"></a>${res.comentarios[0].nombre}<span>${res.comentarios[0].puesto}</span></cite>
    </footer>`
    comentario2.innerHTML = `
    <h4>${res.comentarios[1].titulo}</h4>
    <p id="txtInput">${res.comentarios[1].comentario}</p>
    <footer class="info-articulo">
        <img src="${res.comentarios[1].foto}" alt="${res.comentarios[1].nombre}">
            <cite>
                <a href="${res.comentarios[1].linkedin}" target="_blank"
                    class="fa-brands fa-linkedin" aria-hidden="true"></a>${res.comentarios[1].nombre}<span>${res.comentarios[1].puesto}</span></cite>
    </footer>`
    comentario3.innerHTML = `
    <h4>${res.comentarios[2].titulo}</h4>
    <p id="txtInput">${res.comentarios[2].comentario}</p>
    <footer class="info-articulo">
        <img src="${res.comentarios[2].foto}" alt="${res.comentarios[2].nombre}">
            <cite>
                <a href="${res.comentarios[2].linkedin}" target="_blank"
                    class="fa-brands fa-linkedin" aria-hidden="true"></a>${res.comentarios[2].nombre}<span>${res.comentarios[2].puesto}</span></cite>
    </footer>`
    comentario4.innerHTML = `
    <h4>${res.comentarios[3].titulo}</h4>
    <p id="txtInput">${res.comentarios[3].comentario}</p>
    <footer class="info-articulo">
        <img src="${res.comentarios[3].foto}" alt="${res.comentarios[3].nombre}">
            <cite>
                <a href="${res.comentarios[3].linkedin}" target="_blank"
                    class="fa-brands fa-linkedin" aria-hidden="true"></a>${res.comentarios[3].nombre}<span>${res.comentarios[3].puesto}</span></cite>
    </footer>`
    comentario5.innerHTML = `
    <h4>${res.comentarios[4].titulo}</h4>
    <p id="txtInput">${res.comentarios[4].comentario}</p>
    <footer class="info-articulo">
        <img src="${res.comentarios[4].foto}" alt="${res.comentarios[4].nombre}">
            <cite>
                <a href="${res.comentarios[4].linkedin}" target="_blank"
                    class="fa-brands fa-linkedin" aria-hidden="true"></a>${res.comentarios[4].nombre}<span>${res.comentarios[4].puesto}</span></cite>
    </footer>`
    comentario6.innerHTML = `
    <h4>${res.comentarios[5].titulo}</h4>
    <p id="txtInput">${res.comentarios[5].comentario}</p>
    <footer class="info-articulo">
        <img src="${res.comentarios[5].foto}" alt="${res.comentarios[5].nombre}">
            <cite>
                <a href="${res.comentarios[5].linkedin}" target="_blank"
                    class="fa-brands fa-linkedin" aria-hidden="true"></a>${res.comentarios[5].nombre}<span>${res.comentarios[5].puesto}</span></cite>
    </footer>`
        })
}