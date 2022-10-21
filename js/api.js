/* document.getElementById('hablar').addEventListener("click",()=>{
    decir(document.getElementById("texto").value)
});

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}; */

var txtInput = document.querySelector('#txtInput');
var btnSpeak = document.querySelector('#btnSpeak');
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if(speechSynthesis !== undefined){
    speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', ()=> {
    var toSpeak = new SpeechSynthesisUtterance(txtInput.textContent);
    toSpeak.voice = voices[6];
    synth.speak(toSpeak);
});

function PopulateVoices(){
    voices = synth.getVoices();
    voices.forEach((item, index) => console.log(item.name, index));
}