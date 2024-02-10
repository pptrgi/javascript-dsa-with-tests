class Heap {
  constructor() {
    this.values = [];
  }

  add(value) {
    // add the value from the end, meaning we're on the last value's index
    // if heap isn't empty, swap and bubble up till values satisfy the heap property
    this.values.push(value);

    // bubble up
    this.bubbleUp(this.values.length - 1);
  }

  extractMax() {
    let maxVal = this.values[0];
    let lastValue = this.values.pop();

    // we are making the last value the first so we start bubbling down
    this.values[0] = lastValue;

    this.bubbleDown(0);

    return maxVal;
  }

  swap(index1, index2) {
    // swaps the value at the first index with that of the second
    let holderForFirst = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = holderForFirst;

    // [this.values[index1], this.values[index2]] = [
    //   this.values[index2],
    //   this.values[index1],
    // ];
  }

  bubbleUp(index) {
    let currentIndex = index;
    let parentIndex = this.parent(currentIndex);

    while (
      this.values.length > 1 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      // swap values
      this.swap(currentIndex, parentIndex);

      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }

  bubbleDown(index) {
    // leaf has no right and left children
    if (!this.isLeaf(index)) {
      let leftChildIndex = this.leftChild(index);
      let rightChildIndex = this.rightChild(index);
      var largestIndex = index; // the current index is the assumed to be largest

      // if larger, make index largest
      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        largestIndex = leftChildIndex;
      }
      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
        largestIndex = rightChildIndex;
      }

      // if the value is bigger, bring the bigger index up and continue bubbling down based on the current largest index
      if (largestIndex !== index) {
        this.swap(index, largestIndex);

        this.bubbleDown(largestIndex);
      }
    }
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  isLeaf(index) {
    return (
      index > Math.floor(this.values.length / 2) &&
      index < this.values[this.values.length - 1]
    );
  }

  isEmpty() {
    return this.values.length === 0;
  }

  printHeap() {
    let indx = 0;

    while (this.values[indx]) {
      console.log("PARENT", this.values[indx]);
      console.log("LEFT CHILD", this.values[this.leftChild(indx)]);
      console.log("RIGHT CHILD", this.values[this.rightChild(indx)]);
      indx++;
    }
  }
}

const heapInst = new Heap();
heapInst.add(12);
heapInst.add(55);
heapInst.add(201);
heapInst.add(98);

// heapInst.printHeap();

console.log(heapInst.extractMax());
console.log(heapInst.extractMax());

heapInst.printHeap();
