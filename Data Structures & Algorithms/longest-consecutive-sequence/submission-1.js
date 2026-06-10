class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max = 1;
        if(nums.length === 0) return 0

        for (let i = 0; i < nums.length; i++) {
            console.log("=", set.has(nums[i] - 1));
            if (!set.has(nums[i] - 1)) {
                console.log("counting for ", nums[i]);
                let j = 0;
                let numberToCheck = nums[i];
                let localCount = 1;
                while (j < nums.length) {
                    if (set.has(numberToCheck + 1)) {
                        localCount++;
                        numberToCheck++;
                    }
                    j++;
                }
                console.log("local", localCount);
                if (max < localCount) {
                    max = localCount;
                }
            }
            set.add(nums[i], i);
        }
        console.log(set, max);
        return max;
    }
}
