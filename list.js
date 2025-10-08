class LinkedList {
  constructor(head=null) {
    // Set the head to null at first
    this.head = head;
  }

  append(value) {
    // Create the new node with the value
    const newNode = new Node(value, null);
    // Check if the head exists
    if (this.head) {
      // Use the tail function to find the tail of the list
      const tail = this.tail(this.head);
      // Point the tail of the list at the new node, making it the new tail
      tail.nextNode = newNode;
    } else {
      // The new node will be the head
      this.head = newNode;
    }
  }

  prepend(value) {
    // Create the new node
    const newNode = new Node(value, null);
    // If a head exists, point the new node at the current head
    if (this.head) {
      newNode.nextNode = this.head;
    } 
    // Set the node as the head
    this.head = newNode;
  }

  tail(node) {
    // If the current node does not point at anything, return it
    if (node.nextNode === null) {
      return node;
    }
    // Otherwise check the next node
    return this.tail(node.nextNode);
  }

  toString() {
    // Start at the head with an empty string
    let current = this.head;
    let listString = '';
    // As long as the current node points at another node, concat the value
    while(current.nextNode !== null) {
      listString = listString.concat(`( ${current.value} ) -> `);
      current = current.nextNode;
    } 
    // Once the end is reached, concat null and log the string
    listString = listString.concat('null');
    console.log(listString);
  }
}

class Node {
  constructor(value=null, nextNode=null) {
    this.value = value;
    this.nextNode = nextNode;
  };

}
export { LinkedList }