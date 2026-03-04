// Exercise 1: - **Learning goal:** After this exercise you can use `setTimeout()`, `setInterval()` and `clearInterval()`.
// - Write a function that shows a text after **x seconds** (use `setTimeout()`).
// - Then write a second function that prints **exactly the output shown in the preview**.
// - Use:
//   - `setInterval()`
//   - `clearInterval()`
//   - `if/else` 
function getEl<T extends Element>(selector: string): T {
  // 1) Query a DOM element by CSS selector.
  // 2) If it doesn't exist, stop early with a clear error message.
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Missing element: ${selector}`);
  return el as T;
}

function setText(el: Element, value: string): void {
  // Small helper so we don't repeat `.textContent = ...` everywhere.
  el.textContent = value;
}

function appendLine(pre: HTMLPreElement, line: unknown): void {
  // Append a line to a <pre> (our "on-page console").
  pre.textContent += String(line) + "\n";
} 


const ex1Seconds = getEl<HTMLInputElement>('#ex1Seconds');
const ex1Btn = getEl<HTMLButtonElement>('#ex1Btn')
const ex1PrevBtn = getEl<HTMLButtonElement>('#ex1PreviewBtn')
const ex1Out = getEl<HTMLPreElement>('#ex1Out')

function ex1Clear(): void {
    setText(ex1Out, '');
}

function showTextAfter(seconds: number, text: string): void {
    const ms = seconds * 1000;

    setTimeout(() => {
        appendLine(ex1Out, text)
    }, ms)
}

function runPreviewCountDown(): void {
    let current = 3;

    const id = setInterval(() => {
         if (current > 0) {
            appendLine(ex1Out, `${current}...`);
            current -= 1;
         } else {
            appendLine(ex1Out, `Go!`);
            clearInterval(id); //stop id interval
         }
    }, 1000)
}

ex1Btn.addEventListener('click', ()=> {
    ex1Clear();
    const seconds = Number(ex1Seconds.value);

    if(!Number.isFinite(seconds) || seconds < 0) {
        appendLine(ex1Out, 'Please enter a valid number of seconds (>=0)')
        return;
    }
    appendLine(ex1Out, `Waiting ${seconds}...`)
    showTextAfter(seconds, 'hello from SetTimeOut')
})

ex1PrevBtn.addEventListener('click',()=> {
    ex1Clear();
    runPreviewCountDown();
})


// - **Learning goal:** After this exercise you understand TypeScript event handling and timer functions.
// - Write a function that, when clicking the button, counts down from **100% to 0%**.
// - The base code is given.
// - You may use:
//   - `addEventListener`
//   - `setInterval()`
//   - `clearInterval()`
//   - `if`, `else if`
//   - `querySelector()` or `getElementById()` 

const ex2Btn = getEl<HTMLButtonElement>('#ex2Btn')
const ex2Text = getEl<HTMLSpanElement>('#ex2Text')
const ex2Bar = getEl<HTMLDivElement>('#ex2Bar')
const ex2Out = getEl<HTMLPreElement>('#ex2Out')

let counter = 100;
let intervalId: number | null = null;
ex2Btn.addEventListener('click', () => {
    counter = 100;
    ex2Text.innerText = `${counter}%`
    ex2Bar.style.width = `${counter}%`
    ex2Out.textContent = '';

    if(intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    appendLine(ex2Out, 'Countdown started...');
    intervalId = window.setInterval(() => {
        if(counter === 0) {
            clearInterval(intervalId!)
            intervalId = null;
            appendLine(ex2Out, 'Done')
        } else {
            counter --
            ex2Text.innerText = `${counter}%`;
            ex2Bar.style.width = `${counter}%`
        }
    }, 1000)
})
