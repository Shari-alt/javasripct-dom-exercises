const button = document.querySelector('.show-hide-button');
const box = document.querySelector('.box');

button.addEventListener('click', event => {
    box.classList.toggle('hidden');
    event.target.textContent = event.target.textContent == 'Hide' ? 'Show' : 'Hide'
});