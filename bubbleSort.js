function bubbleSort(arrayToSort) {
  let isSorted = false;
  let upperLimit = arrayToSort.length - 1;
  while (isSorted === false) {
    isSorted = true;
    for (let i = 0; i < upperLimit; i++) {
      if (arrayToSort[i] > arrayToSort[i + 1]) {
        const temp = arrayToSort[i];
        arrayToSort[i] = arrayToSort[i + 1];
        arrayToSort[i + 1] = temp;
        isSorted = false;
      }
    }
    upperLimit--;
  }
  return arrayToSort;
}

/*

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

*/
