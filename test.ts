function maxSubsequence(nums: number[], k: number): number[] {
	const resArray: number[] = [nums[0]];

	nums.forEach((item) => {
		if (item > resArray[resArray.length - 1]) {
			// 当前元素大于已经遍历的元素
			if (resArray.length < k) {
				resArray.push(item);
			} else {
			}
		}
	});

	return [];
}

// 数组中是否有比num更大的元素
const ifHasBigger = (num: number, arr: number[]) => {
	arr.forEach((item) => {
		if (item > num) return true;
	});
};
