class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (!this.isAlphaNumberic(s[i])) {
                i++;
                continue;
            }

            if (!this.isAlphaNumberic(s[j])) {
                j--;
                continue;
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }

    isAlphaNumberic(c) {
        const char = c.charCodeAt(0);
        return (
            (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) ||
            (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) ||
            (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57)
        );
    }
}
