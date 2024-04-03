function openYouTube() {
    window.open('https://www.youtube.com', 'blank');
}

function openChrome() {
    window.open('https://www.google.com/', 'blank');
}

function openSpace() {
    window.open('https://space.marsit.uz/main#active-course', 'blank');
}
function openTelegram() {
    window.open('https://t.me/st_897', 'blank');
}

const recognitionRU = new webkitSpeechRecognition();
recognitionRU.lang = 'ru-RU'; 

const recognitionEN = new webkitSpeechRecognition();
recognitionEN.lang = 'en-US'; 

const recognizeSpeech = (recognition) => {
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase(); 
        console.log('Распознанная речь:', transcript);

        if (transcript.includes('открой youtube')) {
            openYouTube();
        }if(transcript.includes('открой гугл')){
            openChrome();
        }if(transcript.includes("open chrome")){
            openChrome();
        }if(transcript.includes("open youtube")){
            openYouTube();
        }if(transcript.includes('открой space')){
            openSpace();
        }if(transcript.includes('open space')){
            openSpace();
        }if(transcript.includes('open telegram')){
            openTelegram();
        }if(transcript.includes('открой telegram')){
            openTelegram();
        }
        
    };
}

document.getElementById('start-button').addEventListener('click', function() {
    recognizeSpeech(recognitionRU);
    recognitionRU.start();
});

document.getElementById('start-button-en').addEventListener('click', function() {
    recognizeSpeech(recognitionEN);
    recognitionEN.start();
});

window.onload = function() {
    recognizeSpeech(recognitionRU);
    recognitionRU.start();
};
