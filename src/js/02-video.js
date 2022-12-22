import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const KEY_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    const localSetTime = currentTime.seconds;
    localStorage.setItem(KEY_TIME, localSetTime);
    console.log(localSetTime);
  }, 1000)
);

if (localStorage !== 0) {
  player.setCurrentTime(localStorage.getItem(KEY_TIME));
}
