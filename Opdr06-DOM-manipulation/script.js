const displayAnimals = event => {
    let buttonValue = event.target.innerHTML;
    let newAnimal = document.createElement('li');
    let spottedAnimalsList = document.getElementById('spotted-animals-list');
    spottedAnimalsList.appendChild(newAnimal);
    newAnimal.innerHTML = buttonValue;
}

const removeFirstAnimal = () => {
    let spottedAnimals = document.getElementsByTagName('ul')[1];
    let firstAnimal = spottedAnimals.getElementsByTagName('li')[0];
    spottedAnimals.removeChild(firstAnimal);
}

const removeAllAnimals = () => {
    let spottedAnimals = document.getElementsByTagName('ul')[1];
    let firstAnimal = spottedAnimals.firstElementChild;
    while (firstAnimal) {
        firstAnimal.remove();
        firstAnimal = spottedAnimals.firstElementChild;
    }
}

let animalButtons = document.querySelectorAll('.big-five-button').forEach(button => {
    button.addEventListener('click', displayAnimals)
})

let removeFirstButton = document.querySelector('#remove-first-item-button').addEventListener('click', removeFirstAnimal);

let removeAllButton = document.querySelector('#remove-all-button').addEventListener('click', removeAllAnimals);
