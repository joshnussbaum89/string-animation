// Create string movement
function snakeString(string) {
  let stringCopy = string;
  let stringArr = [...stringCopy];

  for (let i = 0; i <= stringCopy.length - 1; i++) {
    setTimeout(() => {
      const firstLetter = stringArr.shift();
      stringArr.push(firstLetter);
      changeTextOfTitle(stringArr.join(''));
    }, i * 100);
  }
}

/**
 * Snake comes to life
 * @param {string} string A string of any size
 */
function snakeAlive(string) {
  snakeString(string);
  setInterval(() => {
    snakeString(string);
  }, string.length * 100);
}

function changeTextOfTitle(text) {
  document.querySelector('#snake-title').innerText = text;
}

/**
 * Typing
 * @param {string} text
 * @param {number} speed - typing speed in ms
 * @description Create and render letters to DOM creating a 'typewriter' effect
 */
function typeSomething(text, speed) {
  let textArr = [...text];
  let wordContainer = document.querySelector('.typing-container');

  function createLetter(container, char) {
    // create a span for each letter and render to DOM
    let letter = document.createElement('span');
    letter.innerText = char;
    letter.classList.add('typing-container__letter');
    container.appendChild(letter);

    // find last letter and add cursor to right hand side
    let lastLetter = container.lastElementChild;
    lastLetter.classList.add('typing-container__last-letter');
    lastLetter.previousElementSibling.classList.remove(
      'typing-container__last-letter'
    );
  }

  function type() {
    for (let i = 0; i < textArr.length; i++) {
      setTimeout(() => {
        createLetter(wordContainer, textArr[i]);
      }, i * speed);

      wordContainer.innerHTML = '';
    }
  }

  type();
  setInterval(() => {
    type();
  }, 5000);
}

snakeAlive('String Animation ');
typeSomething('String Animation', 200);
