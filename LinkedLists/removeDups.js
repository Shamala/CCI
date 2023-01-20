import { LinkedList } from "./LinkedList.js";
//Space Complexity: O(n)
//Time Complexity: O(n)
const removeDups = (linkedList) => {
  let map = {};
  let runner = linkedList.head;
  let newList = new LinkedList();
  while (runner) {
    if (runner.value in map) {
      runner = runner.next;
    } else {
      map[runner.value] = runner.value;
      newList.addNode(runner.value);
      runner = runner.next;
    }
  }
  return newList;
};

//Space Complexity: O(1)
//Time Complexity: O(n)
const removeDupsNoSpaceComplexity = (linkedList) => {
  let map = {};

  if (linkedList.size() <= 1) return linkedList;

  let slow = linkedList.head;
  let fast = linkedList.head;

  while (slow) {
    while (fast.next) {
      if (fast.next.value === slow.value) {
        fast.next = fast.next.next;
      } else {
        fast = fast.next;
      }
    }
    slow = slow.next;
  }
};

let list = new LinkedList();
list.addNode(1);
list.addNode(1);
list.addNode(3);
list.addNode(4);
list.addNode(1);
console.log(`Initial List`);
list.printList();
console.log(`Remove Duplicates`);
const newList = removeDups(list);
newList.printList();
console.log(`Remo Dups no Space`);
console.log(`Initial List`);
list.printList();
removeDupsNoSpaceComplexity(list);
console.log(`Remove Duplicates`);
list.printList();
