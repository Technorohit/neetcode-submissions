class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = [];
        let map = new Map();
        for(let i = 0; i<strs.length;i++){
            let sortedValue = strs[i].split('').sort().join("");
            if(map.has(sortedValue))
            {
                map.get(sortedValue).push(strs[i])
            }
          else map.set(strs[i].split('').sort().join(""),[strs[i]])
        }
        return Array.from(map.values())
    }
}
