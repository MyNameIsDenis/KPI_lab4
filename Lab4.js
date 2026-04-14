class PriorityQueue {
  queue = [];

  enqueue(item, priority) {
    this.queue.push({ value: item, priority: priority });
  }


  findIndex(identifier) {
    if (identifier === "oldest") return 0;
    if (identifier === "newest") return this.queue.length - 1;

    let index = 0;
    let compare;

    if (identifier === "highest") {
      compare = (a, b) => a > b;
    } else if (identifier === "lowest") {
      compare = (a, b) => a < b;
    } else {
      throw new Error("Crirteium doesn't exist");
    }

    for (let i = 1; i < this.queue.length; i++) {
      if (compare(this.queue[i].priority, this.queue[index].priority)) {
        index = i;
      }
    }
    return index;
  }
}

export default PriorityQueue;