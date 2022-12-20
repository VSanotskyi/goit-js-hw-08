const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', onPlay);

function onPlay(data) {
  console.log(data.timeupdate);
}
