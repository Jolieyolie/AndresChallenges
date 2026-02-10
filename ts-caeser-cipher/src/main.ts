import './style.css'
const input_encode = document.querySelector('#encoder_text') as HTMLInputElement
const input_decode = document.querySelector('#decoder_text') as HTMLInputElement
const shift = document.querySelector('#shift_value') as HTMLInputElement
const output = document.querySelector('#output') as HTMLParagraphElement
const encodeBtn = document.querySelector('#encode_btn') as HTMLButtonElement
const decodeBtn = document.querySelector('#decode_btn') as HTMLButtonElement

encodeBtn.addEventListener('click', () => {
    const text_encode = input_encode.value
    const shift_value = parseInt(shift.value)
    output.textContent = caeserCipher(text_encode, shift_value)

})

decodeBtn.addEventListener('click', () => {
    const text_decode = input_decode.value
    const shift_value = parseInt(shift.value)
    output.textContent = caeserCipher(text_decode, -shift_value)

})

function caeserCipher(text: string, shift: number): string {
    if (isNaN(shift)) {
        return "Please enter a valid number for shift.";
    }
    if (text.length === 0) {
        return "Please enter a valid text.";
    }
    let result = '';
    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            const code = char.charCodeAt(0);
            const shiftedCode = (code -97 + shift + 26) % 26 + 97;
            result += String.fromCharCode(shiftedCode);
        }
        else if (char >= 'A' && char <= 'Z') {
            const code = char.charCodeAt(0);
            const shiftedCode = (code - 65 + shift + 26)% 26 + 65;
            result += String.fromCharCode(shiftedCode);
        }
        else {
            result += char;
    }
    
    }
    
    return result;
}