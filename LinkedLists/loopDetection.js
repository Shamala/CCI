import { LinkedList } from "./LinkedList.js";
const loopDetect = (linkedList) => {
  let node = linkedList.head;
  if (node.next === null) return node;

  let slow = node;
  let fast = node;

  while (fast != null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (!fast) return null;

  slow = linkedList.head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};

let list = new LinkedList();
list.addNode(7);
list.addNode(1);
list.addNode(3);
list.addNode(4);

console.log(`Initial List`);
list.printList();
console.log(`Node at Loop: ${loopDetect(list)}`);
