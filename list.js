class LinkedList {
  constructor(head=null) {
    this.head = head;
  }
  append(value) {
    const newNode = new Node(value, null);
    const tail = this.tail();
    tail.nextNode = newNode;
  }

  tail() {
    let current = this.head;
    while (current.nextNode != null) {
      current = current.nextNode;
    }
    return current;
  }
}


class Node {
  constructor(value=null, nextNode=null) {
    this.value = value;
    this.nextNode = nextNode;
  };

}
