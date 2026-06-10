class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let length1 = s.length;
        let length2 = t.length;
        let map1= {};
        let map2 = {};
        if(length1 != length2) return false;

        for(let i = 0; i <length1; i++){
           if(map1[s[i]]){
            map1[s[i]] = map1[s[i]]+1
           }else{
            map1[s[i]] = 1;
           }
        }
        console.log(map1)
        for(let i = 0; i<length2; i++){
            if(map1[t[i]]){
                map1[t[i]] = map1[t[i]] - 1
            }
        }
        const keys = Object.keys(map1);
        console.log(map1)
        for(let i = 0; i < Object.keys(map1).length; i++){
            if(map1[keys[i]] != 0){
                return false
            }
        }
        console.log(map1)
        return true;
    }
}
