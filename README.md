# odin-linked-list (The Odin Project Linked List)

## Overview

This list was made for The Odin Project linked list project. In previous lessons I had some
issues in understanding the application for recursive functions. My problem was not necessarily
how the basics of recursion work, but how to meaningfully implement recursive functions in code.
So, for this project, I wanted to use recursion whenever I felt that it made sense. 

For simplicity, this meant I wanted to use some additional parameters other than stated
in the project outline. After a bit of googling I found out about the use of private
methods, so I opted to use those for parameters I don't want a user to influence.
I was able to keep the parameters for the actual object methods to the bare minimum.

## Structure

The list consists of two classes, the Node class and dhe LinkedList class. Objects of the Node class
have a value and the next object. The LinkedList class houses all of
the functions and reference to the head Node. 

### How to import

```JS
import { LinkedList } from './list.js';
```

---

### LinkedList class methods

#### append(value)
Adds a new node containing value to the end of the list.

#### prepend(value) 
Adds a new node containing value to the start of the list.
    
#### size()
Returns the total number of nodes in the list. Uses the recursive private method #sizeRec.

#### head()
Returns the first node in the list.

#### tail()
Returns the last node in the list. Uses the recursive private method #tailRec.

#### at(index) 
Returns the node at the given index. Uses the recursive private method #atRec.

#### pop()
Removes the last element from the list. Uses the recursive private method #popRec.

#### contains(value) 
Returns true if the passed in value is in the list and otherwise returns false. Uses the recursive
private method #containsRec.

#### find(value) 
Returns the index of the node containing value, or null if not found. Uses the recursive private 
method #findRec.

#### toString()
Represents the object as a string. Example: ( value ) -> ( value ) -> ( value ) -> null. Uses the 
recursive private method #toStringRec.

#### insertAt(value, index)
Inserts a new node with the provided value at the given index. Uses the recursive private method #insertAtRec.

#### removeAt(index) 
Removes the node at the given index. Uses the recursive private method #removeAt.

