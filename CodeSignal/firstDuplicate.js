/**
  Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
 */

function firstDuplicate(arr) {
    const firstDuplicates = numberAndFirstDuplicateIndexes(arr);
    return smallestFirstDuplicate(firstDuplicates);
}

function numberAndFirstDuplicateIndexes(arr) {
    let onlyFirstDuplicates = [];
    let numberAndFirstDuplicateIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        const duplicateIndex = arr.findIndex((element, index) => element === arr[i] && index !== i);
        if (!onlyFirstDuplicates.includes(arr[i]) && duplicateIndex !== -1) {
            onlyFirstDuplicates.push(arr[i])
            numberAndFirstDuplicateIndexes.push({ number: arr[i], duplicateIndex })
        }
    }
    return numberAndFirstDuplicateIndexes;
}

function smallestFirstDuplicate(duplicates) {
    const indexes = duplicates.map(duplicate => duplicate.duplicateIndex)
    const smallestIndex = Math.min(...indexes);
    const smallestDuplicate = duplicates.find(duplicate => duplicate.duplicateIndex === smallestIndex)
    return smallestDuplicate.number;
}

console.log(firstDuplicate([1, 2, 5, 3, 3, 4, 4, 4, 5, 3]))