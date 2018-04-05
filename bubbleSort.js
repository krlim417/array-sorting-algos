function bubbleSort(arrayToSort) {
  for (let i = arrayToSort.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arrayToSort[j] > arrayToSort[j + 1]) {
        const temp = arrayToSort[j];
        arrayToSort[j] = arrayToSort[j + 1];
        arrayToSort[j + 1] = temp;
      }
    }
  }
  return arrayToSort;
}