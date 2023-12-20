class Node {
  constructor(value) {
    /**
     * A doubly linked list is made up of nodes
     * Each node has it's value and a pointer to the next and previous nodes
     */
    this.value = value;
    this.nextNode = null;
    this.prevNode = null;
  }
}

class LinkedList {
  /**
   * Doubly linked list
   */
  constructor() {
    // the list needs to have knowledge of it's head and tail
    this.head = null;
    this.tail = null;
  }

  append(value) {
    // add a node from the tail of the linkedlist
    const newNode = new Node(value); // create an instance of Node class

    // if the linkedlist is empty, then the first node will be it's head and tail
    // otherwise add the node from the tail
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentNode = this.tail;

      while (currentNode) {
        if (currentNode.nextNode === null) {
          // if the current node's next node is null, then that's the tail
          // so set the new node to be tail and point the previous tail to this new one
          this.tail = newNode;
          currentNode.nextNode = this.tail;
          break;
        } else {
          // if there's a next node to the current node, keep looping until there's none/null
          currentNode = currentNode.nextNode;
        }
      }
    }
  }

  prepend(value) {
    // add a node from the head of the linkedlist

    const newNode = new Node(value); // create a node with the supplied value

    // if the list is empty, make the new node head and tail, otherwise update the head
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // make the new node head and set the previous head to be it's next node
      const outgoingHead = this.head;

      this.head = newNode;
      this.head.nextNode = outgoingHead;
    }
  }

  insertAfter(value, nodeValue) {
    // insert a node after some node
    /**
     * 1. check if a node with the given value exists
     * 2. if it does, create a new node, make the found node's next node be this new node
     * 3. then make the new node's next node point to the found node's previous next node
     */
    const beforeNode = this.find(nodeValue);

    if (!beforeNode) return false;

    const newNode = new Node(value);

    const beforeNodeNextNode = beforeNode.nextNode;
    newNode.nextNode = beforeNodeNextNode;

    beforeNode.nextNode = newNode;
  }

  deleteFromHead() {
    // delete the first node
    this.head = this.head.nextNode;
  }

  find(value) {
    // find the node with the given value
    /**
     * 1. If the list is empty return false
     * 2. If the head's value matches given value return the head node
     * 3. While there's a next node starting from the head, keep looping and matching each node's
     * value with the given one, if there's match, return that node
     * 4. Since the tail node doesn't have a next node, check if it's value matches, if yes return it,
     * otherwise conclusively, the value wasn't found
     */

    if (this.isEmpty()) return false;

    let currentNode = this.head;

    if (currentNode.value === value) {
      return currentNode;
    }

    while (currentNode.nextNode) {
      if (currentNode.nextNode.value === value) {
        return currentNode.nextNode;
      } else {
        currentNode.nextNode = currentNode.nextNode.nextNode;
      }
    }

    if (this.tail.value === value) {
      return this.tail;
    }

    return false;
  }

  isEmpty() {
    // if the list has no head then it's empty
    return this.head === null;
  }

  printList() {
    let headNode = this.head;

    while (headNode) {
      console.log(headNode.value);

      headNode = headNode.nextNode;
    }
  }
}

const linkedlist = new LinkedList();
linkedlist.append("first string");
linkedlist.append("second item");
linkedlist.append("third item");
linkedlist.prepend(100);

// linkedlist.printList();

// console.log(linkedlist.find("second item"));

// linkedlist.insertAfter(200, "second item");
// linkedlist.printList();

linkedlist.deleteFromHead();
linkedlist.printList();
