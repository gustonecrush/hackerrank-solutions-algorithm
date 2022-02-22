function staircase(n) {
    for(let i = 0; i < n; i++){
        let stair = "";
        for(let j = 0; j < n; j++) {
            if(i >= (n-1-j)) stair += "#";
            else stair += " ";
        }
        console.log(stair);
    }
}

staircase(6);