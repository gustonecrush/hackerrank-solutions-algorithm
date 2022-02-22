function miniMaxSum(arr) {
    const n = arr.length;
    let newArr = [];
    let max, min;
    for(let i = 0; i < n; i++) {
        let sum = 0; 
        for(let j = 0; j < n; j++) {
            if(i !== j) {
                sum += arr[j];
            }
        }
        newArr.push(sum);
        max = newArr[i];
        min = newArr[i];
        for(let k = 0; k < n; k++) {
            if(max <= newArr[k]) max = newArr[k];
            if(min > newArr[k]) min = newArr[k];
        }
    }
    console.log(min, max);
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);