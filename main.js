var google = window.webkitSpeechRecognition

var siri = new google()

var alexa = document.getElementById("textbox")

function start() {
alexa.innerHTML = ""
siri.start();
}
siri.onresult = function(event) {
    console.log(event);
var Hola = event.results[0][0].transcript
alexa.innerHTML = Hola
if(Hola == "Take my picture."){
    speak()
}
}
function speak() {
    var férias = window.speechSynthesis;
    var quiero = "Ok estou tirando sua selfie em 5 segundos"
    var muitissimo = new SpeechSynthesisUtterance(quiero);
    setTimeout(() => { window.speechSynthesis.getVoices().forEach(function(voice) { console.log(voice.name, voice.lang); }); }, 5000);
    var hyper_Voice = speechSynthesis.getVoices()
    muitissimo.voice = hyper_Voice[94]
    férias.speak(muitissimo);
    Webcam.attach( '#camera' );
    setTimeout(function (){
        Scarlet();
        Violet();
    },5000)
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
function Scarlet() {
    Webcam.snap( function(data_uri) {
        document.getElementById('result').innerHTML = 
         '<img id="Spirigatito" src="'+data_uri+'"/>';
    } );
}
function Violet() {
    var Floragato = document.getElementById("link")
    var Meowscarada = document.getElementById("Spirigatito").src
    Floragato.href = Meowscarada
    Floragato.click()
}