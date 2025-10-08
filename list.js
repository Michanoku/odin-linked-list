class LinkedList {
  constructor(head=null) {
    this.head = head;
  }
  append(value) {
    const newNode = new Node(value, null);
    const tail = this.tail(this.head);
    tail.nextNode = newNode;
  }

  tail(node) {
    if (node.nextNode === null) {
      return node;
    }
    return this.tail(node.nextNode);
  }
}


class Node {
  constructor(value=null, nextNode=null) {
    this.value = value;
    this.nextNode = nextNode;
  };

}
