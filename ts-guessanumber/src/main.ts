import './style.css';

let targetNumber: number = Math.floor(Math.random() * 100) + 1;
let maxRounds: number = 0;
let currentRound: number = 0;
let gameOver: boolean = false;
const resultInput = document.querySelector<HTMLInputElement>('#result')!;
const guessButton = document.querySelector<HTMLButtonElement>('button')!;
const radioButtons = document.querySelectorAll<HTMLInputElement>('input[name="guess"]');
document.querySelector<HTMLDivElement>('#app')!.innerHTML =  ``

function getSelectorRounds(): number {
    for (const radio of radioButtons) {
        if (radio.checked) {
            if (radio.id === 'custom') {
                const customRounds = prompt('Enter the number of rounds you want:');
                return customRounds ? Number(customRounds) : 0;
            } else if (radio.id === 'four' ) return 4;
              else if ( radio.id === 'five' ) return 5;
              else if ( radio.id === 'six') return 6; 
        }   
    }
    return 0;
}
getSelectorRounds();

guessButton.addEventListener('click', () => {
    if (gameOver) return;

    if (maxRounds === 0) {
        maxRounds = getSelectorRounds();
        if (maxRounds === 0) {
            alert('Please select the number of rounds first.');
            return;
        }
    }
    const userGuess = Number(resultInput.value);
    currentRound++;

    if (userGuess === targetNumber) {
        alert(`Congratulations! You've guessed the number ${targetNumber} in ${currentRound} rounds.`);
        gameOver = true;
    } else if (currentRound >= maxRounds) {
        alert(`Game Over! The correct number was ${targetNumber}.`);
        gameOver = true;
    } else if (userGuess < targetNumber) {
        alert('Too low! Try again.');
    } else if (userGuess > targetNumber) {
        alert('Too high! Try again.');
    }

  resultInput.value = "";
})