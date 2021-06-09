const input = document.querySelector('.controls_input');
const h1 = document.querySelector('.header_text');

input.addEventListener('input', () => {
    title.textContent = 'Hello World, ${input.value}';
}
});