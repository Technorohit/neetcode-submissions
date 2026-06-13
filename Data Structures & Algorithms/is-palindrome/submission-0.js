class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //sanitise
        let newStringArr = [];
        for (let i = 0; i < s.length; i++) {
            if (
                (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
                (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) ||
                (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
            )
                newStringArr.push(s[i]);
        }
        const newStringArrA = newStringArr.join("").toLowerCase();
        console.log("nn", newStringArrA);
        let j = newStringArrA.length - 1;
        for (let i = 0; i < newStringArrA.length / 2; i++) {
            console.log("=>", newStringArrA[i], newStringArrA[j]);
            if (newStringArrA[i] != newStringArrA[j]) {
                return false;
            }
            j--;
        }
        return true;
    }
}
