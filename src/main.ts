import * as moment from 'moment';

const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonStart = document.getElementById('start');

buttonPlus.addEventListener('click', () => {
  const numberElement = document.getElementById('number') as HTMLInputElement;
  const number = +numberElement.value;
  numberElement.value = `${number + 1}`;
});

buttonMinus.addEventListener('click', () => {
  const numberElement = document.getElementById('number') as HTMLInputElement;
  const number = +numberElement.value;
  numberElement.value = number === 0 ? '0' : `${number - 1}`;
});

function visibleTimerSettings(visible: string) {
  const timer = document.getElementById('timer');
  const countdown = document.getElementById('countdown');

  if (visible === 'none') {
    countdown.style.display = 'flex';
    timer.style.display = visible;
  } else {
    countdown.style.display = 'none';
    timer.style.display = visible;
  }
}

buttonStart.addEventListener('click', () => {
  visibleTimerSettings('none');
  let time =
    +(document.getElementById('number') as HTMLInputElement).value * 60;
  const countdownNumber = document.getElementById(
    'countdown_number'
  ) as HTMLInputElement;

  setInterval(() => {
    if (time <= 0) {
      visibleTimerSettings('flex');
      window.location.reload();
    } else {
      countdownNumber.value = `${moment.unix(time).format('mm:ss')}`;
    }
    time -= 1;
  }, 1000);
});
