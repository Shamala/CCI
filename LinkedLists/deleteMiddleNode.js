const deleteMiddleNode = (nodeToDelete) => {
  if (nodeToDelete === null || nodeToDelete.next === null) return false;
  let next = nodeToDelete.next;
  nodeToDelete.value = nodeToDelete.value;
  nodeToDelete.next = next.next;
  return true;
};

console.log(`Delete Middle Node`);
