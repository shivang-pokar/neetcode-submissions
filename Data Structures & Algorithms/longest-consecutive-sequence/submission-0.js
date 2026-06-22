class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let uniqueSet = new Set(nums);
        let longNumber = 0;

        for (let number of uniqueSet) {
            if (!uniqueSet.has(number - 1)) {
                let sqLength = 1;
                let currentNumber = number;

                while (uniqueSet.has(currentNumber + 1)) {
                    currentNumber++;
                    sqLength++;
                }
                longNumber = Math.max(sqLength,longNumber)
            }
        }

        return longNumber;
    }
}
