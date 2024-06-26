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
function repeatMusic() {
    if (audioPlayer) {
        audioPlayer.loop = true;
        audioPlayer.play();
    }
}
function stopRepeat() {
    if (audioPlayer) {
        audioPlayer.loop = false;
    }
}


let audioPlayer; 

function playMusic() {
    if (!audioPlayer) {
        audioPlayer = new Audio('sigma.m4a');
    }
    audioPlayer.play();
}

function stopMusic() {
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
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
        }if(transcript.includes("open youtube")){
            openYouTube();
        }if(transcript.includes('открой гугл')){
            openChrome();
        }if(transcript.includes("open chrome")){
            openChrome();
        }if(transcript.includes('открой space')){
            openSpace();
        }if(transcript.includes('open space')){
            openSpace();
        }if(transcript.includes('open telegram')){
            openTelegram();
        }if(transcript.includes('открой telegram')){
            openTelegram();
        }if (transcript.includes('включи музыку')) {
            playMusic();
        }if (transcript.includes('выключи музыку')) {
            stopMusic();
        }if (transcript.includes('play music')) {
            playMusic();
        }if (transcript.includes('stop music')) {
            stopMusic();
        }if (transcript.includes('repeat music')) {
            repeatMusic();
        }if (transcript.includes('stop repeat music')) {
            stopRepeat();
            
        }
    }
}

document.getElementById('start-button').addEventListener('click', function() {
    recognizeSpeech(recognitionRU);
    recognitionRU.start();
});

window.onload = function() {
    recognizeSpeech(recognitionRU);
    recognitionRU.start();
};
