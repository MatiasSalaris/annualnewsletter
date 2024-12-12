// // Example riddles and responses
// const riddles = [
//     "I speak without a mouth and hear without ears. What am I?",
//     "The more you take, the more you leave behind. What am I?",
//     "I’m light as a feather, yet the strongest man can’t hold me for long. What am I?"
// ];

// const answers = [
//     "An echo",
//     "Footsteps",
//     "Breath"
// ];

// const orb = document.getElementById('orb');
// const riddleDiv = document.getElementById('riddle');
// const diceButton = document.getElementById('diceButton');

// function rollDice() {
//     const randomIndex = Math.floor(Math.random() * riddles.length);
//     orb.textContent = riddles[randomIndex]; // Show riddle in the orb
//     riddleDiv.textContent = ''; // Clear the answer

//     setTimeout(() => {
//         // Reveal answer after 5 seconds
//         riddleDiv.textContent = `Answer: ${answers[randomIndex]}`;
//     }, 5000);
// }

// diceButton.addEventListener('click', rollDice);
