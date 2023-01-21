import { LinkedList } from "./LinkedList.js";
const deleteMiddleNode = (nodeToDelete) => {
  if (nodeToDelete === null || nodeToDelete.next === null) return false;
  let next = nodeToDelete.next;
  nodeToDelete.value = next.value;
  nodeToDelete.next = next.next;
  return true;
};
let list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
console.log(`Initial List`);
list.printList();

console.log(`Delete Middle Node: ${deleteMiddleNode(list.findNode(2))}`);
list.printList();
