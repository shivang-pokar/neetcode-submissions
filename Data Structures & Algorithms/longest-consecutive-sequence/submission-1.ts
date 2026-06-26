class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let uniqNumber = new Set(nums);
        let longNumber = 0;

        for (let num of uniqNumber) {
            if (!uniqNumber.has(num - 1)) {
                let seqLength = 1;
                while (uniqNumber.has(num + seqLength)) {
                    seqLength++;
                }

                longNumber = Math.max(longNumber, seqLength);
            }
        }
        return longNumber;
    }
}
