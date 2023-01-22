// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.

import { LinkedList } from "./LinkedList.js";

const sumListsReverseOrder = (list1, list2) => {
  let num1 = list1.head;
  let num2 = list2.head;

  let newList = new LinkedList();
  let carryOver = 0;
  while (num1 && num2) {
    const sum = num1.value + num2.value + carryOver;

    if (sum > 10) {
      carryOver = 1;
      let number = sum % 10;
      newList.addNode(number);
    } else {
      newList.addNode(sum);
      carryOver = 0;
    }
    num1 = num1.next;
    num2 = num2.next;
  }

  if (!num1 && num2) {
    while (num2) {
      newList.addNode(num2.value);
      num2 = num2.next;
    }
  }
  if (!num2 && num1) {
    while (num1) {
      newList.addNode(num1.value);
      num1 = num1.next;
    }
  }
  newList.next = null;
  newList.printList();
};
let list1 = new LinkedList();
list1.addNode(7);
list1.addNode(1);
list1.addNode(6);
list1.addNode(6);
let list2 = new LinkedList();
list2.addNode(5);
list2.addNode(9);
list2.addNode(2);

console.log(`Initial List`);
list1.printList();
list2.printList();

console.log(`Sum Lists by Node:`);
let newList = sumListsReverseOrder(list1, list2);
//newList.printList();
