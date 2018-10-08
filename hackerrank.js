function main() {
    const s = "javascriptloops";
    
    vowelsAndConsonants(s);

	console.log(factorial(4));	// 24
	console.log(factorial(12)); // 479 001 600
}

main();

function factorial(n) {	
	if (n === 1 || n === 0) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}


function vowelsAndConsonants(s) {
    for(let char of s) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            console.log(char);
        }        
    }
    
    for(let char of s) {
        if(char != "a" && char != "e" && char != "i" && char != "o" && char != "u") {
            console.log(char);
        }        
    }    
}
