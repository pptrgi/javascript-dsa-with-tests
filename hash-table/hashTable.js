class HashTable {
  /**
   * Hash table implementation with an array, and a defined size
   * The table is made up of buckets, and the buckets are made up of key-value pairs
   */
  constructor(size) {
    this.hashtable = [];
    this.size = size;
  }

  insert(key, value) {
    // add a new pair to the hash table
    /**
     * Get the key's address/hash
     * if there's no such address, create a new bucket. Colliding pairs belong on same bucket
     * add the key value pair and reduce size
     */
    const address = this.hashFunction(key);

    if (!this.hashtable[address]) {
      this.hashtable[address] = []; // bucket
    }

    this.hashtable[address].push([key, value]);
    this.size--;
  }

  delete(key) {
    // remove a pair from the table
    // with the address, you can get the bucket
    const address = this.hashFunction(key);
    const currentBucket = this.hashtable[address];

    if (!currentBucket) {
      return false;
    } else {
      // since a bucket is an array of key-value pairs, loop through it and see what pair has a key that matches the given one then remove it
      for (let pair = 0; pair < currentBucket.length; pair++) {
        if (currentBucket[pair][0] === key) {
          delete currentBucket[pair];
          this.size++;
        }
      }
    }
  }

  search(key) {
    // search
    const address = this.hashFunction(key);
    const currentBucket = this.hashtable[address];

    if (!currentBucket) {
      return false;
    } else {
      // loop through the bucket and see what pair has a key that matches the given one then return it
      for (let pair = 0; pair < currentBucket.length; pair++) {
        if (currentBucket[pair][0] === key) {
          return currentBucket[pair];
        }
      }
    }
  }

  hashFunction(key) {
    // create a hash that'll serve as address for a key-value pair
    let hash = 0;

    const stringifiedKey = key.toString();

    for (let index = 0; index < stringifiedKey.length; index++) {
      hash = (hash + stringifiedKey.charCodeAt(index) * index) % this.size;
    }

    return hash;
  }

  printHT() {
    for (let bucket = 0; bucket < this.size; bucket++) {
      if (this.hashtable[bucket] === undefined) {
        console.log(`Bucket ${bucket}: Empty`);
      } else {
        console.log(
          `Bucket ${bucket}: ${JSON.stringify(this.hashtable[bucket])}`
        );
      }
    }
  }
}
const ht = new HashTable(20);
