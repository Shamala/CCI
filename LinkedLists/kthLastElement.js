import { LinkedList } from "./LinkedList.js";
const kthLastElement = (linkedList, k) => {
  let distance = k;
  let runner = linkedList.head;
  let slow = linkedList.head;
  while (distance > 0) {
    runner = runner.next;
    distance--;
  }
  while (runner) {
    slow = slow.next;
    runner = runner.next;
  }
  return slow.value;
};

let list = new LinkedList();
list.addNode(1);
list.addNode(1);
list.addNode(3);
list.addNode(4);
list.addNode(1);
console.log(`Initial List`);
list.printList();
console.log(`kth Element: ${kthLastElement(list, 2)}`);

let list2 = new LinkedList();
list2.addNode(1);
list2.addNode(2);

console.log(`Initial List`);
list2.printList();
console.log(`kth Element: ${kthLastElement(list2, 2)}`);
