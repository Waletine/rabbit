const rabbit = document.querySelector('.rabbit');
const carrot = document.querySelector('.carrot');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const score = document.querySelector('#score');
const field = document.querySelector('main');
const footer = document.querySelector('footer');
const item = document.querySelector('.item');

const divs = Array.from(field.children);
let index;

const addRabbitToField = () => {
  index = Math.round(Math.random() * (divs.length - 1));
  divs[index].appendChild(rabbit);
};

const addCarrotToField = () => {
  const i = Math.round(Math.random() * (divs.length - 1));
  if (Array.from(divs[i].children).length === 0) {
    divs[i].appendChild(carrot);
  } else { addCarrotToField(); }
};

let idInterval;
const startHandler = () => {
  addRabbitToField();
  idInterval = setInterval(addCarrotToField, 2000);
};

const stopHandler = () => {
  item.appendChild(rabbit);
  item.appendChild(carrot);
  clearInterval(idInterval);
};

start.addEventListener('click', startHandler);
stop.addEventListener('click', stopHandler);

function moveRabbit(event) {
  switch (event.code) {
    case 'ArrowLeft':
      if (index % 5 !== 0) {
        index -= 1;
        divs[index].appendChild(rabbit);
      }
      break;
    case 'ArrowUp':
      if (index > 4) {
        index -= 5;
        divs[index].appendChild(rabbit);
      }
      break;
    case 'ArrowRight':
      if (index % 5 !== 4) {
        index += 1;
        divs[index].appendChild(rabbit);
      }
      break;
    case 'ArrowDown':
      if (index < 20) {
        index += 5;
        divs[index].appendChild(rabbit);
      }
      break;
    default:
      console.log(event.code);
  }
}
window.addEventListener('keydown', moveRabbit);
