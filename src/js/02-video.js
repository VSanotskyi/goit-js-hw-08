import throttle from 'lodash.throttle';
import vimeoPlayer from '@vimeo/player';

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

const saveTime = localStorage.getItem(KEY_TIME);

if (saveTime) {
  player.setCurrentTime(saveTime);
}

// console.log(localStorage.getItem(KEY_TIME));
// const saveTime = localStorage.getItem(KEY_TIME);

// if (saveTime) {
//   player.setCurrentTime(localStorage.getItem(KEY_TIME));
// }
