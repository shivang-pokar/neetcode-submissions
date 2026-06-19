class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let prevmap: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            const difference = target - currentNum;

            if (difference in prevmap) {
                return [prevmap[difference], i];
            }

            prevmap[currentNum] = i;
        }

        return [];
    }
}
