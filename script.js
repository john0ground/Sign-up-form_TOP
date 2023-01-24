const toggleIcon = document.getElementById('toggle-pause');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

const backgroundVid = document.getElementById('beach-sunset');

toggleIcon.addEventListener('click', playPause);
function playPause() {
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

//createAccount btn from <main>, open form
const createAccount = document.getElementById('create-account');
const main = document.querySelector('main');
const form = document.querySelector('.form');
const footer = document.querySelector('footer');

createAccount.addEventListener('click', () => {
    main.style.display = 'none';
    form.style.display = 'grid';
    footer.style.position = 'relative';
    footer.style.top = '150px';
});

//close form
const closeIcon = document.getElementById('close');
closeIcon.addEventListener('click', () => {
    form.style.display = 'none';
    main.style.display = 'block';
    footer.style.position = 'static';
});

const password = document.getElementById('password');

password.addEventListener('input', () => {
    const passwordInfo = document.getElementById('password-info');
    if(password.value.length >= 8) {
        passwordInfo.style.display = 'none';
    } else if (password.value.length < 1) {
        passwordInfo.style.color = 'black';
    } else {
        passwordInfo.style.display = 'block';
        passwordInfo.style.color = 'red';
    }
});

//confirm password
function checkPassword(form) {
    const initialPd = form.password.value;
    const confirmPd = form.confirmPassword.value;
    if(initialPd !== confirmPd) {
        return false;
    }
}

const confirmPasswordInput = document.getElementById('confirm-password');
const passwordMatchInfo = document.getElementById('password-matching');
confirmPasswordInput.addEventListener('input', () => {
    if(confirmPasswordInput.value !== password.value) {
        passwordMatchInfo.style.display = 'block';
        passwordMatchInfo.style.color = 'red';
    } else {
        passwordMatchInfo.textContent = 'Passwords match'
        passwordMatchInfo.style.color = 'green';
    }
});
