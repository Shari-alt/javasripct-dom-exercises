const data = [];
const button = document.querySelector('.submit-button');
const form = document.querySelector('.super-form');
const input = document.querySelector('input');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const inputForName = form['name'];
    const inputForAge = form ['age'];
    const inputForMarriage = form['married'];
    const inputForHobbies = form['hobbies'];

    data.push(inputForName.value);
    data.push(inputForAge.value);
    data.push(inputForMarriage.value);
    data.push(inputForHobbies.value); 

    console.log(inputForName.value);
    console.log(inputForAge.value);
    console.log(inputForMarriage.value);
    console.log(inputForHobbies.value);
    console.log(data);

    form.reset();
});