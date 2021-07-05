(function () {
    let videoPlayer = {
        playBtn: document.querySelector('#play'),
        reloadBtn: document.querySelector('#reload'),
        video: document.querySelector('video'),
        init: function () {
            videoPlayer.playBtn.addEventListener('click', videoPlayer.playVideo)
            videoPlayer.reloadBtn.addEventListener('click', videoPlayer.reloadVideo)
        },
        playVideo: function () {
            if (this.getAttribute('src') == 'video/play.png') {
                videoPlayer.video.play()
                this.setAttribute('src', 'video/pause.png')
            } else {
                videoPlayer.video.pause()
                this.setAttribute('src', 'video/play.png')
            }
        },
        reloadVideo: function () {
            videoPlayer.video.load();
            videoPlayer.playBtn.setAttribute('src', 'video/play.png')
        }
    }
    videoPlayer.init();
})();