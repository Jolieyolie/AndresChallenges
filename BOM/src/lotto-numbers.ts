function generateLottoNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    if (randomNum > 49) {
        throw new Error( "too big")
    }
    return randomNum;
}

let lottoResult : number[] = [];
while (lottoResult.length < 7){
    try {
        const num = generateLottoNumber();
        if (!lottoResult.includes(num)) {
            lottoResult.push(num)
        }
    }
    catch(error) {
    }
}
console.log("Lotto numbers: ", lottoResult)