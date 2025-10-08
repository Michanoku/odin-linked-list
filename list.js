class LinkedList {
  constructor(head=null) {
    // Set the head to null at first
    this._head = head;
  }

  append(value) {
    // Create the new node with the value
    const newNode = new Node(value, null);
    // Check if the head exists
    if (this._head) {
      // Use the tail function to find the tail of the list
      const tail = this.tail();
      // Point the tail of the list at the new node, making it the new tail
      tail.nextNode = newNode;
    } else {
      // The new node will be the head
      this._head = newNode;
    }
  }

  prepend(value) {
    // Create the new node
    const newNode = new Node(value, null);
    // If a head exists, point the new node at the current head
    if (this._head) {
      newNode.nextNode = this._head;
    } 
    // Set the node as the head
    this._head = newNode;
  }

  head() {
    return this._head;
  }

  tail(node=null) {
    // If no node was passed, set it to head
    if (!node) {
      node = this._head;
    }
    // If the current node does not point at anything, return it
    if (node.nextNode === null) {
      return node;
    }
    // Otherwise check the next node
    return this.tail(node.nextNode);
  }

  toString(node=null, listString=null) {
    // If no node or no string was passed, set initial values
    if (!node) {
      node = this._head;
    }
    if (!listString) {
      listString = '';
    }
    // If the next node does not exist, concat the final string, and return it
    if (node.nextNode === null) {
      listString = listString.concat(`( ${node.value} ) -> null`);
      return listString;
    }
    // Concat the string and call the function again
    listString = listString.concat(`( ${node.value} ) -> `);
    return this.toString(node.nextNode, listString);
  }

  size(node=null, counter=0) {
    // If no node was passed, use the head
    if (!node) {
      node = this._head;
    }
    // If there is no next node, return the counter (but count the node first)
    if (node.nextNode === null) {
      return counter + 1;
    }
    // Otherwise call the function with the counter updated to 1
    return this.size(node.nextNode, counter + 1);
  }
  at(index) {
    // Check for a valid index integer
    if (!Number.isInteger(index) || index < 0) {
      return "Not a valid index. Please provide a positive integer."
    }
    // Start at the head and initialize i to 0
    let node = this._head;
    let i = 0;
    // As long as we have not reached the index, keep going
    while (i < index) {
      // If we have not reached the index but the next node is null
      if (i < index && node.nextNode === null) {
        return "No node found. Index higher than list length.";
      };
      node = node.nextNode;
      i++;
    }
    return node;
  }
}

class Node {
  constructor(value=null, nextNode=null) {
    this.value = value;
    this.nextNode = nextNode;
  };
}
export { LinkedList }