function insertionSort(arrayToSort) {
  if (arrayToSort.length > 1) {
    for (let i = 1; i < arrayToSort.length; i++) {
      const elementToSort = arrayToSort[i];
      let indexToCompare = i - 1;
      while (indexToCompare > -1 && elementToSort < arrayToSort[indexToCompare]) {
        arrayToSort[indexToCompare + 1] = arrayToSort[indexToCompare];
        indexToCompare--;
      }
      arrayToSort[indexToCompare + 1] = elementToSort;
    }
  }
  return arrayToSort;
}