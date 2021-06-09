const button = document.querySelector('.shine-button');
const list = document.querySelectorAll('li');
const color = ['red', 'orange', 'yellow', 'green', 'blue', 
'indigo', 'violet'];

button.addEventListener('click', () => {
    for (let i = 0; i < color.length; i++) {
    list[i].style.color = color[i];
}
});