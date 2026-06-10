class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const st = {}
        for(const num of nums){
            if(st[num] != undefined){
                return true
            }
            st[num] = num;
        }
        return false;
    }
}
