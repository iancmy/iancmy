const iframe = document.querySelector('#player');
const player = new Vimeo.Player(iframe);
const playButton = document.querySelector('.showreel-info');
const muteUnmuteButton = document.querySelector('#mute-unmute-button');
const fullscreenButton = document.querySelector('#fullscreen');

muteUnmuteButton.addEventListener('click', () => {
    if(muteUnmuteButton.getAttribute('data-playing') === 'false'){
        player.play();
        muteUnmuteButton.setAttribute('data-playing', 'true');
        player.setVolume(0.4);
        muteUnmuteButton.setAttribute('data-muted', 'false');
        muteUnmuteButton.innerHTML = 'volume_down';
        return
    }

    player.getVolume().then(volume => {
        if (volume < 0.3){
            player.setVolume(0.4);
            muteUnmuteButton.setAttribute('data-muted', 'false');
            muteUnmuteButton.innerText = 'volume_down';
        } else if (volume < 0.5){
            player.setVolume(1);
            muteUnmuteButton.setAttribute('data-muted', 'false');
            muteUnmuteButton.innerText = 'volume_up';
        } else {
            player.setVolume(0);
            muteUnmuteButton.setAttribute('data-muted', 'true');
            muteUnmuteButton.innerText = 'volume_off';
        }
    })
});

// get volume and set mute button icon on volume change
player.on('volumechange', e => {
    player.getVolume().then(volume => {
        if (volume < 0.1){
            muteUnmuteButton.setAttribute('data-muted', 'true');
            muteUnmuteButton.innerText = 'volume_off';
        } else if (volume < 0.5){
            muteUnmuteButton.setAttribute('data-muted', 'false');
            muteUnmuteButton.innerText = 'volume_down';
        } else {
            muteUnmuteButton.setAttribute('data-muted', 'false');
            muteUnmuteButton.innerText = 'volume_up';
        }
    })
})
    

player.on('ended', e => {
    if(document.fullscreenElement) document.exitFullscreen();
    player.unload();
    player.loadVideo(player.getVideoId());

    setTimeout(() => {
        muteUnmuteButton.innerText = 'replay'
        muteUnmuteButton.setAttribute('data-playing', 'false');
    }, 250);
})

playButton.addEventListener('click', e => {
    player.requestFullscreen().then(() =>{
        if(player.getVolume() === 0) player.setVolume(0.4)
        player.setCurrentTime(0);
        player.play();
    })
})

fullscreenButton.addEventListener('click', e => {
    player.requestFullscreen().then(() => {
        player.play();
    })
} )

// fullscreen change event listener set volume
player.on('fullscreenchange', e => {
    player.getVolume().then(volume => {
        if (volume === 0 && document.fullscreenElement){
            player.setVolume(0.4);
        } else if (volume > 0 && !document.fullscreenElement){
            player.setVolume(0);
        }
    })
} )

