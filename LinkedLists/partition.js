// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

import { LinkedList } from "./LinkedList.js";
// If order is important
const partitionByOrder = (linkedList, partitionNum) => {
  let node = linkedList.head;
  let smallListStart = null;
  let smallListEnd = null;
  let bigListStart = null;
  let bigListEnd = null;

  while (node) {
    if (node.value < partitionNum) {
      let smallNode = { value: node.value, next: null };
      if (smallListStart === null) {
        smallListStart = smallNode;
        smallListEnd = smallListStart;
      } else {
        smallListEnd.next = smallNode;
        smallListEnd = smallListEnd.next;
      }
    } else {
      let bigNode = { value: node.value, next: null };
      if (bigListStart === null) {
        bigListStart = bigNode;
        bigListEnd = bigListStart;
      } else {
        if (bigListEnd.value > bigNode.value) {
          var temp = bigListStart;
          bigListStart = bigNode;
          bigListStart.next = temp;
        } else {
          bigListEnd.next = bigNode;
          bigListEnd = bigListEnd.next;
        }
      }
    }
    node = node.next;
  }
  //bigListEnd.next = null;
  if (!smallListStart) return bigListStart;
  smallListEnd.next = bigListStart;
  return smallListStart;
};

const partition = (linkedList, partitionNum) => {
  let head = linkedList.head;
  let tail = linkedList.head;

  let node = linkedList.head;

  if (!head || !tail) return linkedList;

  while (node) {
    if (head.value < partitionNum) {
      node.value = head.value;
      head = node;
    } else {
      node.value = tail.value;
      tail = node;
    }
    node = node.next;
  }
  tail.next = null;
  return head;
};
let list = new LinkedList();
list.addNode(3);
list.addNode(5);
list.addNode(8);
list.addNode(5);
list.addNode(10);
list.addNode(2);
list.addNode(1);
console.log(`Initial List`);
list.printList();

console.log(`Partition by Node:`);
let newList = partitionByOrder(list, 5);
let newListStr = "";
while (newList) {
  newListStr += `${newList.value}-->`;
  newList = newList.next;
}
console.log(`${newListStr}null`);

console.log(`Partition by Node (No order):`);
let newList1 = partitionByOrder(list, 5);
let newListStr1 = "";
while (newList1) {
  newListStr1 += `${newList1.value}-->`;
  newList1 = newList1.next;
}
console.log(`${newListStr1}null`);
