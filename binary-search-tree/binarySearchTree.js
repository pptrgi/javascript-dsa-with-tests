class BSTNode {
  /**
   * A bst is composed of nodes
   */
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  /**
   * A binary search tree has smaller values than the parent value on the left side and greater ones on the right
   */
  constructor() {
    // The tree should know about it's root node
    this.root = null;
  }

  insert(value) {
    // if the tree is empty, then this node becomes the root node
    // otherwise loop through the tree comparing to see if the value is greater or less than the parent
    // if the values matches the parent value, discard it

    const newNode = new BSTNode(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        // if the current value is less than that of parent, pursue left
        // if the immediate is left node empty assign it the new node, otherwise continue checking left
        if (currentNode.value > value) {
          if (currentNode.leftChild === null) {
            currentNode.leftChild = newNode;
            break;
          } else {
            currentNode = currentNode.leftChild;
          }
        }
        // if the current value is greater than that of parent, pursue right
        // if the immediate is right node empty assign it the new node, otherwise continue checking right
        if (currentNode.value < value) {
          if (currentNode.rightChild === null) {
            currentNode.rightChild = newNode;
            break;
          } else {
            currentNode = currentNode.rightChild;
          }
        }

        // if the value matches the current node's, discard it
        if (currentNode.value === value) {
          break;
        }
      }
    }
  }

  search(value) {
    // when searching, if the tree is empty, return false
    // if the value matches given value, return it
    // if the value is less than parent's, traverse left, otherwise right
    // if after traversal no value matches, return false

    if (this.isEmpty()) {
      return "the tree is empty";
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        }

        if (currentNode.value > value) {
          currentNode = currentNode.leftChild;
        }
        if (currentNode.value < value) {
          currentNode = currentNode.rightChild;
        }
      }

      return "not found";
    }
  }

  isEmpty() {
    // if the tree has no root node then it's empty
    return this.root === null;
  }

  // TREE TRAVERSALS
  // depth first search
  preOrder(node) {
    // starts with the parent node, goes to left child then right child
    if (node) {
      console.log(node.value);
      this.preOrder(node.leftChild);
      this.preOrder(node.rightChild);
    }
  }
  inOrder(node) {
    // starts with the left child, goes to parent node then right child
    this.preOrder(node.leftChild);
    console.log(node.value);
    this.preOrder(node.rightChild);
  }
  postOrder(node) {
    // starts with the right child, goes to right child then the parent node - the leaves first
    this.preOrder(node.rightChild);
    this.preOrder(node.leftChild);
    console.log(node.value);
  }

  // breadth first search
  breadthTraverse() {
    /**
     * starts with the parent/root node, adds it to a queue
     * the first node in the queue is then removed and the removed node is printed out
     * if that removed node had a left child and right child, they are enqueued. Left first
     * the previously left child which is now the first in queue is removed and it's left and right child enqueued
     * again previously right child which is now the first in queue is removed and it's left and right child enqueued
     * process continues until there's no other children
     */

    const queue = [];
    const currentNode = this.root;

    queue.push(currentNode);

    while (currentNode) {
      const removedNode = queue.shift();

      if (currentNode.leftChild) {
        queue.push(currentNode.leftChild);
      }

      if (currentNode.rightChild) {
        queue.push(currentNode.rightChild);
      }

      return console.log(removedNode);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(23);
bst.insert(4);
bst.insert(40);

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);
// bst.breadthTraverse();
console.log(bst.search(23));
