let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Если в nums2 остались элементы, их нужно скопировать в nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

merge(nums1, m, nums2, n);
console.log(nums1);

// Эта задача сложновата, пришлось подсматривать, потмоу что через 2 for не получалось нормально