import './style.css'

function getEl<T extends Element>(selector: string): T {
  const el = document.querySelector(selector);
  if(!el) throw new Error(`Miss element: ${selector}`)
  return el as T;
  } 

const timeDisplay = getEl<HTMLDivElement>('#time')
const timeInput = getEl<HTMLInputElement>('#minutes');  
const startBtn = getEl<HTMLButtonElement>('#start-button');
const pauseBtn = getEl<HTMLButtonElement>('#pause-button');
const restartBtn = getEl<HTMLButtonElement>('#restart-button');

function formatTime(seconds: number): string {
  const safe = Math.max(0, seconds);
  const minutes = Math.floor(safe / 60);
  const secs = safe % 60;

  const mm = String(minutes).padStart(2, '0');
  const ss = String(secs).padStart(2, '0');

  return `${mm}: ${ss}`
}

// function runCountDown(): void {
//   let input = Number(timeInput.value)
//   const id = setInterval(() => {
//     if (input > 0) {
//       input -= 1
//     } else {
//       clearInterval(id)
//     }
//   }, 60000)
// }

let totalSeconds = 0;
let intervalId: number | null = null;
let remaining = totalSeconds;

function render(): void {
  timeDisplay.textContent = formatTime(remaining)
}

function stopTimer(): void {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

startBtn.addEventListener('click', ()=>{
  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  if (remaining <= 0) {
    const minutes = Number(timeInput.value);
    if (!Number.isFinite(minutes) || minutes <= 0) return;
    remaining =  Math.floor(minutes * 60);
  }

  render();
  intervalId = window.setInterval(()=> {
    remaining -= 1
    render()
  

    if (remaining <= 0) {
      stopTimer();
    }
    totalSeconds --
  }, 1000)
});

restartBtn.addEventListener('click', ()=> {
  stopTimer();
  if (totalSeconds === 0) {
    const minutes = Number(timeInput.value);
    if (Number.isFinite(minutes) && minutes > 0) {
      totalSeconds = Math.floor(minutes * 60);
    }
  }
  remaining = totalSeconds;
 render()
})

pauseBtn.addEventListener('click', ()=> {
  stopTimer();
})

render()