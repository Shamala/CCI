import { LinkedList } from "./LinkedList.js";
const intersection = (list1, list2) => {
  let length1 = 0;
  let length2 = 0;
  let node1 = list1.head;
  let node2 = list2.head;
  let tail1;
  let tail2;
  while (node1) {
    length1++;
    tail1 = node1;
    node1 = node1.next;
  }
  while (node2) {
    length2++;
    tail2 = node2;
    node2 = node2.next;
  }

  if (length1 === length2 && list1.head.next.value !== list2.head.next.value)
    return false;

  if (tail1.value !== tail2.value) return false;

  node1 = list1.head;
  node2 = list2.head;
  if (length1 > length2) {
    let diff = length1 - length2;

    while (diff > 0) {
      node1 = node1.next;
      diff--;
    }
  } else if (length1 < length2) {
    let diff = length2 - length1;

    while (diff > 0) {
      node2 = node2.next;
      diff--;
    }
  }
  let intersecting = false;
  while (node1 && node2) {
    if (node1.value === node2.value) {
      intersecting = true;
    } else if (intersecting) return false;
    node1 = node1.next;
    node2 = node2.next;
  }
  return intersecting;
};
let list1 = new LinkedList();
list1.addNode(3);
list1.addNode(1);
list1.addNode(5);
list1.addNode(9);
list1.addNode(7);
list1.addNode(2);
list1.addNode(1);
console.log(`Initial List 1`);
list1.printList();
let list2 = new LinkedList();
list2.addNode(4);
list2.addNode(6);
list2.addNode(7);
list2.addNode(2);
list2.addNode(1);
console.log(`Initial List 2`);
list2.printList();
console.log(`Does intersect ${intersection(list1, list2)}`);
