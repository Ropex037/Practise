let playBtn = document.querySelector('#play');
let reloadBtn = document.querySelector('#reload');
let video = document.querySelector('video');

playBtn.addEventListener('click', playVideo);


function playVideo() {
    if (this.getAttribute('src') == "video/play.png") {
        video.play();
        this.setAttribute('src', 'video/pause.png');
    } else {
        video.pause();
        this.setAttribute('src', 'video/play.png');
    }
}

reloadBtn.addEventListener('click', reloadVideo);

function reloadVideo() {
    video.load();
    playBtn.setAttribute('src', 'video/play.png');
}

