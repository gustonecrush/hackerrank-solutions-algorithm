function birthdayCakeCandles(candles) {
    const n = candles.length;
    let max = candles[0]; 
    let nTallestCandles = 1;
    for(let i = 1; i < n; i++) {
        if( max < candles[i] ) {
            max = candles[i];
            nTallestCandles = 0;
            nTallestCandles += 1;
        } else if( max == candles[i] ) {
            nTallestCandles += 1;
        }
    }
    console.log(nTallestCandles);
}

const arr = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
birthdayCakeCandles(arr);