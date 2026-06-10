class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i = 0; i< nums.length ; i++){
            let compliment = target - nums[i];
            console.log(map)
            if(map.has(compliment)){
                return [map.get(compliment),i]
            }
            map.set(nums[i],i)
        }
        return [];
    }
}
