class Stack {
  /**
   * Stack uses LIFO concept
   * In this case it is implemented with an array
   */

  constructor() {
    // initialize the stack and keep track of the it's size
    this.stack = [];
    this.size = 0;
  }

  push(value) {
    // append an item to the end of the stack and increment size
    this.stack[this.size] = value;
    this.size++;
  }

  pop() {
    // delete and return the lastly added item if the stack isn't empty, and decrement size
    if (!this.isEmpty()) {
      const popItem = this.stack[this.size - 1];

      this.size--;

      return this.stack.pop(popItem);
    } else {
      return "the stack is empty";
    }
  }

  isEmpty() {
    // check whether the stack is empty
    return this.size === 0;
  }

  printStack() {
    return console.log(this.stack);
  }
}

const stack = new Stack();
stack.push(20);
stack.push(10);
stack.push(5);

stack.pop();

stack.printStack();
