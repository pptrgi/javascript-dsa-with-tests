class Queue {
  /**
   * A queue utilizes FIFO concept
   */
  constructor() {
    // initialize the queue to an object and keep track of the queue's start and end index
    this.queue = {};
    this.startIndex = 0;
    this.endIndex = 0;
  }

  enqueue(value) {
    // add/enqueue items from the end and increment endIndex
    this.queue[this.endIndex] = value;
    this.endIndex++;
  }

  dequeue() {
    // remove/dequeue and return the first item to enter the queue
    // update startIndex to the following item's index
    if (!this.isEmpty()) {
      const dequeuedItem = this.queue[this.startIndex];

      delete this.queue[this.startIndex];
      this.startIndex++;

      return dequeuedItem;
    } else {
      return "the queue is empty";
    }
  }

  isEmpty() {
    // check whether the queue is empty
    return this.endIndex - this.startIndex === 0;
  }

  printQueue() {
    return console.log(this.queue);
  }
}

const queue = new Queue();
queue.enqueue(45);
queue.enqueue(90);
queue.enqueue(8);

queue.dequeue();
queue.dequeue();

queue.printQueue();
