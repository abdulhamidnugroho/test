// Find the maximum number of consecutive 1s in this array
// Run in console with nums array variable;

var maxConsecutiveOnes = function(nums) {
    let largest = 0;
    let current = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 0) {
            current = 0;
        } else {
            current++;
        };
        if (current > largest) largest = current;
    };
    return largest;
};

// example 
let nums = [1,1,1,0,0,1];
maxConsecutiveOnes(nums);