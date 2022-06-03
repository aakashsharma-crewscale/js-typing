// https://github.com/WebDevSimplified/JS-Speed-Typing-Game/blob/master/script.js

const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';

const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');

quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span');
  const arrayValue = quoteInputElement.value.split('');

  let correct = true;
  arrayQuote.forEach((charSpan, index) => {});
});

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then((res) => res.json())
    .then((data) => data.content);
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerHTML = '';
  quote.split('').forEach((char) => {
    const charSpan = document.createElement('span');
    charSpan.innerText = char;
    quoteDisplayElement.appendChild(charSpan);
  });

  quoteInputElement.value = null;
  startTimer();
}

let startTime;
function startTimer() {
  timerElement.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timerElement.innerText = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

renderNewQuote();
