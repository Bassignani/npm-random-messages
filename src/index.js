const messages = [
    "Martin",
    "Ana",
    "Nicolas",
    "Diego",
    "Fernanda",
    "Ramon",
    "Claudio",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };