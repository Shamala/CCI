class Node {
  constructor(value = undefined) {
    this.next = null;
    this.value = value;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addNode(value) {
    let node = new Node(value);
    let runner = this.head;
    if (!this.head) {
      this.head = node;
    } else {
      while (runner.next) {
        runner = runner.next;
      }
      runner.next = node;
    }
    return this.head;
  }
  printList() {
    let node = this.head;
    let list = "";
    while (node) {
      list += `${node.value}-->`;
      node = node.next;
    }
    list += `null`;
    console.log(list);
  }
  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }
}
export { LinkedList };
