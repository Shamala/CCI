import { LinkedList } from "./LinkedList.js";
const isPalindrome = (linkedList) => {
  let node = linkedList.head;

  if (!node) return true;

  let count = 0;
  while (node) {
    node = node.next;
    count++;
  }
  let length = 0;
  let array = [];
  node = linkedList.head;
  let mid = count % 2 === 0 ? count / 2 : count / 2 - 1;
  while (length < mid) {
    array.push(node.value);
    node = node.next;
    length++;
  }
  if (count % 2 === 1) {
    node = node.next;
  }
  while (node) {
    if (node.value === array[array.length - 1]) {
      array.pop();
      node = node.next;
    } else {
      return false;
    }
  }
  return true;
};
let list1 = new LinkedList();
list1.addNode(7);
list1.addNode(1);
list1.addNode(6);
list1.addNode(6);
console.log(`Initial List`);
list1.printList();
console.log(`isPalindrome: ${isPalindrome(list1)}`);
let list2 = new LinkedList();
list2.addNode(7);
list2.addNode(1);
// list2.addNode(1);
list2.addNode(1);
list2.addNode(7);
console.log(`Initial List`);
list2.printList();
console.log(`isPalindrome: ${isPalindrome(list2)}`);
