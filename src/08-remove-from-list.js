/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
const ListNode = require('../extensions/list-node');

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

function removeKFromList(l, k) {
  const newListArray = [];
  let currentList = l.next;

  while (currentList !== null) {
    if (currentList.value !== k) {
      newListArray.push(currentList.value);
      currentList = currentList.next;
    } else {
      currentList = currentList.next;
    }
  }

  return convertArrayToList(newListArray);
}

// const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
// // const expected = convertArrayToList([1, 2, 4, 5]);
// console.log(removeKFromList(initial, 3));

module.exports = removeKFromList;
