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

  tail() {
    return this.#tailRec(this._head);
  }

  #tailRec(node) {
    // If the head is null, return error.
    if (!node) {
      return "Error. List has no nodes.";
    }
    // If the current node does not point at anything, return it
    if (node.nextNode === null) {
      return node;
    }
    // Otherwise check the next node
    return this.#tailRec(node.nextNode);
  }

  toString() {
    return this.#toStringRec(this._head, '');
  }

  #toStringRec(node, listString) {
    // If the head is null, return error.
    if (!node) {
      return "Error. List has no nodes.";
    }
    // If the next node does not exist, concat the final string, and return it
    if (node.nextNode === null) {
      listString = listString.concat(`( ${node.value} ) -> null`);
      return listString;
    }
    // Concat the string and call the function again
    listString = listString.concat(`( ${node.value} ) -> `);
    return this.#toStringRec(node.nextNode, listString);
  }

  size() {
    return this.#sizeRec(this._head, 0);
  }

  #sizeRec(node, counter) {
    // If the head is null, return error.
    if (!node) {
      return "Error. List has no nodes.";
    }
    // If there is no next node, return the counter (but count the node first)
    if (node.nextNode === null) {
      return counter + 1;
    }
    // Otherwise call the function with the counter updated to 1
    return this.#sizeRec(node.nextNode, counter + 1);
  }

  at(index) {
    // Check for a valid index integer
    if (!Number.isInteger(index) || index < 0) {
      return "Error. Not a valid index. Please provide a positive integer."
    }
    return this.#atRec(index, this._head);
  }

  #atRec(index, node) {
    // If the head is null, return error.
    if (!node) {
      return "Error. List has no nodes.";
    }
    // If the index is not 0 yet but there is no next node, show error
    if (index > 0 && node.nextNode === null) {
      return "Error. No node found. Index higher than list length.";
    };
    // If the index is at 0, return the node
    if (index === 0) {
      return node;
    }
    return this.#atRec(index - 1, node.nextNode);
  }

  pop() {
    return this.#popRec(this._head, null)
  }

  #popRec(node, previous) {
    // If the head is null, return error.
    if (!node) {
      return "Error. List has no nodes.";
    }
    // If the current node does not point at anything
    if (node.nextNode === null) {
      // Set the previous node nextNode to null
      previous.nextNode = null;
      return;
    }
    // Otherwise check the next node
    return this.#popRec(node.nextNode, node);
  }

  contains(value) {
    return this.#containsRec(value, this._head);
  }

  #containsRec(value, node) {
    // If the head is null, return error.
    if (!node) {
      return "Error. List has no nodes.";
    }
    // If the value was found, return true
    if (node.value === value) {
      return true;
    }
    // If the end of the list was reached, return false
    if (node.nextNode === null) {
      return false;
    }
    return this.#containsRec(value, node.nextNode);
  }

  find(value) {
    return this.#findRec(value, this._head, 0);
  }

  #findRec(value, node, index) {
    // If the head is null, return error.
    if (!node) {
      return "Error. List has no nodes.";
    }
    // If the value was found, return index
    if (node.value === value) {
      return index;
    }
    // If the end of the list was reached, return null
    if (node.nextNode === null) {
      return null;
    }
    return this.#findRec(value, node.nextNode, index + 1);
  }
}

class Node {
  constructor(value=null, nextNode=null) {
    this.value = value;
    this.nextNode = nextNode;
  };
}

export { LinkedList }