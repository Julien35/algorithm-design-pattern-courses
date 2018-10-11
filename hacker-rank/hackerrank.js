function main() {
    const s = "javascriptloops";
    
    //vowelsAndConsonants(s);
	//console.log(factorial(4));	// 24
	//console.log(factorial(12)); // 479 001 600
	//console.log(bubbleTri([2, 3, 6, 6, 5, -10, 20, 21]));
	console.log(getSecondLargest([2, 3, 6, 6, 5, -10, 20, 21, 21 ,21, 21])); // 20
	
}

main();

function getSecondLargest(nums) {
    // Complete the function
    let secondLargest = 0;
	nums = bubbleSort(nums);
	
	//console.log(nums.length);
	//console.log(nums);
	//console.log(nums[nums.length - 2]);
	//console.log(nums[nums.length - 1]);
	
	if(nums[nums.length - 2] < nums[nums.length - 1]) {
		secondLargest = nums[nums.length - 2];
	} else if(nums.length){
		nums.pop();
		secondLargest = getSecondLargest(nums);
	}
    return secondLargest;
}

function bubbleSort(inTab) {
    for (let i = 0; i < inTab.length - 1; i++) {
        for (let j = 0; j < inTab.length - 1; j++) {
            if (inTab[j + 1] < inTab[j]) {
                [inTab[j + 1], inTab[j]] = [inTab[j], inTab[j + 1]];
            }
        }
    }
    return inTab;
}

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
        if(char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u") {
            console.log(char);
        }        
    }    
}
