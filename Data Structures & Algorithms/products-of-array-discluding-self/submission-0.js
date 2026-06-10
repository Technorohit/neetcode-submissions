class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let left = [];
        let right = [];
        let product = 1;
        for(let i=0;i<nums.length;i++){
            left.push(product)
            product = product * nums[i]
            
        }
        product = 1;
        console.log(product)
        for(let i = nums.length-1;i>=0;i--){
            right[i]= (product)
            product = product * nums[i];  
        }
        const result = [];
        for(let i = 0;i<nums.length;i++){
            result.push(left[i]*right[i])
        }
       return result;
    }
}
