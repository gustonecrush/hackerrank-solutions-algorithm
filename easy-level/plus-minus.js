function plusMinus(arr) {
    const n   = arr.length;
    let nPos  = 0, nZero = 0, nNeg  = 0;
    arr.forEach(function(val) {
        if(val > 0) nPos += 1;
        if(val < 0) nNeg += 1;
        if(val == 0) nZero += 1;
    })
    console.log((nPos/n).toFixed(6));
    console.log((nNeg/n).toFixed(6));
    console.log((nZero/n).toFixed(6));
}

const arr = [1, 1, 0, -1, -1];
plusMinus(arr);