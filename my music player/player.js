const audio = document.getElementById("audio");
const playPauseButton = document.getElementById('playPause');
const stopButton = document.getElementById("stop");
const progress = document.getElementById("progress");
const currentTimeLabel = document.getElementById("currentTime");
const durationLabel = document.getElementById("duration");

let isPlaying = false;

audio.addEventListener('loadedmetadata', () => {
    durationLabel.textContent = formatTime(audio.duration);
    progress.max= Math.floor(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    progress.value= Math.floor(audio.currentTime);
    currentTimeLabel.textContent = formatTime(audio.currentTime);
});

playPauseButton.addEventListener('click', () => {
    if(isPlaying) {
        audio.pause();
        playPauseButton.textContent = "play";
    }
    else{
        audio.play();
        playPauseButton.textContent = "pause";
    }
    isPlaying = !isPlaying;
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = "play";
    isPlaying = false;
});

progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
});

function formatTime(seconds) {
    const minuits = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}

