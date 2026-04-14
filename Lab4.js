class PriorityQueue {
  queue = [];

  enqueue(item, priority) {
    this.queue.push({ value: item, priority: priority });
  }


  findIndex(identifier) {
    if (identifier === "oldest") return 0;
    if (identifier === "newest") return this.queue.length - 1;
  }
}

export default PriorityQueue;