const toggleIcon = document.getElementById('toggle-pause');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

const backgroundVid = document.getElementById('beach-sunset');

toggleIcon.addEventListener('click', playPause);
function playPause(e) {
    if (backgroundVid.paused) {
        backgroundVid.play();
        play.style.display = 'none';
        pause.style.display = 'block';
    } else {
        backgroundVid.pause();
        play.style.display = 'block';
        pause.style.display = 'none';
    }
}