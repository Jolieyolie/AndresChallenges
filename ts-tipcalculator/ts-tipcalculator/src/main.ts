import './style.css'

const billInput = document.getElementById('bill-amount') as HTMLInputElement;
const buttons = document.querySelectorAll<HTMLButtonElement>(".tip-btn")
const peopleInput = document.getElementById('number-people') as HTMLInputElement;
const tipDisplay = document.getElementById('tip-amount') as HTMLSpanElement;
const totalDisplay = document.getElementById('total-bill') as HTMLSpanElement;
const perPersonDisplay = document.getElementById('per-person') as HTMLSpanElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
let tipPercentage = 0.2; 
let selectedButton: HTMLButtonElement | null = null
function calculateTip() {
    const billAmount = parseFloat(billInput.value) || 0;

    const numberOfPeople = parseInt(peopleInput.value) || 1;

    const tipAmount = billAmount * tipPercentage;
    const totalBill = billAmount + tipAmount;
    const perPerson = totalBill / numberOfPeople;

    tipDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalDisplay.textContent = `$${totalBill.toFixed(2)}`;
    perPersonDisplay.textContent = `$${perPerson.toFixed(2)}`;
}


billInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);


resetButton.addEventListener('click', () => {
    billInput.value = '';
    tipPercentage = 0.2;
    peopleInput.value = '1';
    calculateTip();
}
);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (selectedButton) {
          selectedButton.dataset.selected = "false"
        }

        button.dataset.selected = "true"
        selectedButton = button

        tipPercentage = Number(button.value)
        calculateTip()
  })
})



calculateTip();
