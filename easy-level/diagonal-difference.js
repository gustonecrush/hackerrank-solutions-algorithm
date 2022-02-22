function diagonalDifference(arr) {
    // Write your code here
    const n = arr[0].length;
    let diagonalLeftToRight = 0;
    let diagonalRightToLeft = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i == j) diagonalLeftToRight += arr[i][j];
            if ((n-j-1) == i) diagonalRightToLeft += arr[i][j];
        }
    }
    return Math.abs(diagonalLeftToRight-diagonalRightToLeft);
}

const arr = [[1,2,3], [4,5,6], [9,8,9]];
console.log(diagonalDifference(arr));

