class Solution {
    isValidSudoku(board) {
        let seen = new Set();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let val = board[i][j];
                
                if (val !== '.') {
                    // Create unique string identifiers for tracking
                    let rowKey = `row ${i} has ${val}`;
                    let colKey = `col ${j} has ${val}`;
                    let boxKey = `box ${Math.floor(i / 3)}-${Math.floor(j / 3)} has ${val}`;
console.log(rowKey,colKey," => ",boxKey)
                    // If any key already exists, the board is invalid
                    if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                        return false;
                    }

                    seen.add(rowKey);
                    seen.add(colKey);
                    seen.add(boxKey);
                }
            }
        }
        return true;
    }
}