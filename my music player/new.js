const audio = document.querySelector('audio');
const playPauseButton = document.querySelector('#playPause');
const stopButton = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const currentTimeLabel = document.querySelector('#currentTime');
const durationLabel = document.querySelector('#duration');

let isPlaying = false;
let intervalId;

audio.addEventListener('loadedmetadata', () => {
    durationLabel.textContent = formatTime(audio.duration);
    progress.max = Math.floor(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    progress.value = Math.floor(audio.currentTime);
    currentTimeLabel.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('ended', () => {
    isPlaying = false;
    playPauseButton.textContent = 'play';
    clearInterval(intervalId);
});

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = 'play';
    } else {
        audio.play();
        playPauseButton.textContent = 'pause';
        intervalId = setInterval(() => {
            if (audio.currentTime >= audio.duration) {
                isPlaying = false;
                playPauseButton.textContent = 'play';
                clearInterval(intervalId);
            }
        }, 1000);
    }
    isPlaying = !isPlaying;
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = 'play';
    isPlaying = false;
    clearInterval(intervalId);
});

progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${secs < 10 ? '0' + secs : secs}`;
}
