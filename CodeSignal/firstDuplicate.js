/**
  Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
 */

function firstDuplicate(a) {
  let onlyFirstDuplicateA = [];
  let itemAndFirstDuplicateIndexA = [];
  for (let i=0; i<a.length; i++) {
      const duplicateIndex = a.findIndex((e, index) => e === a[i] && index !== i);
      if (!onlyFirstDuplicateA.includes(a[i])) {
          onlyFirstDuplicateA.push(a[i])
          itemAndFirstDuplicateIndexA.push({item: a[i], duplicateIndex})
      }
  }
  const removedNonDuplicatesA = itemAndFirstDuplicateIndexA.filter(e => e.duplicateIndex !== -1)
  let smallestFirstDuplicate;
  if (removedNonDuplicatesA.length > 0) {
      let smallestIndex = a.length;
      for (let j=0; j<removedNonDuplicatesA.length; j++) {
          if (removedNonDuplicatesA[j].duplicateIndex < smallestIndex) {
              smallestIndex = removedNonDuplicatesA[j].duplicateIndex;
              smallestFirstDuplicate = removedNonDuplicatesA[j].item;
          }
      }
  } else {
      return -1
  }
  return smallestFirstDuplicate;
}