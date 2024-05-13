
const jokes = ['Why did the computer apply sunscreen? To prevent getting a byte from the sun!',
    'What does a baby computer call its father? Data!',
    'Why was the computer always partying? It had great chips!',
    'How do computers like to dance? Disk-o!',
    'What do computers wear on their feet? Micro-soft shoes!',
    'Why was the computer feeling crunchy? It had too many cookies',!
    'Whats a computers favorite type of music? Hard-drive Rock!',
    'Why did the computer go to the spaceship? To improve its space bar!',
    'How do computers like their tea? With a byte of sugar!',
    'Why did the computer become a gardener?To improve its root access!',
    'Whats a computers favorite type of tree? A binary tree!',
    'How do you know a computer is sleepy? It starts to lag!',
    'What does a computer do when its scared? It freezes!',
    'Why do computers never have a secret? Because they cant resist sharing bytes!',
    'What did the spider do on the computer? Built a website!',
    'How does a computer catch a mouse? With a mouse trap!',
    'Why was the computer good at school? It had a lot of memory!',
    'How do computers drink? Using a sip-drive!',
    'Why did the computer get a medal? It had outstanding hardware!',
    'How does a computer stay cool? It keeps the windows open!',];

function showjoke() {
    rn = Math.floor(Math.random() * jokes.length);
    text = jokes[rn];

    const jokeContainer = document.querySelector('.jokeText');

    jokeContainer.innerHTML = '';

    const newJoke = document.createElement('p');
    newJoke.textContent = text;

    jokeContainer.appendChild(newJoke);
}