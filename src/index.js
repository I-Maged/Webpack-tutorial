import generateJoke from './generateJoke';
import './style.css';
import laughing from './assets/laughing.svg';

const laughImg = document.querySelector('#laughImg');
laughImg.src = laughing;

const jokeBtn = document.querySelector('#jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
