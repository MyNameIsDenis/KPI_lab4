class PriorityQueue {
  queue = [];

  enqueue(item, priority) {
    this.queue.push({ value: item, priority: priority });
  }

  dequeue(identifier) {
    if (this.queue.length === 0) return undefined;
    let idx = this.findIndex(identifier);
    const [removed] = this.queue.splice(idx, 1);
    return { value: removed.value, priority: removed.priority };
  }

  peek(identifier) {
    if (this.queue.length === 0) return undefined;
    const idx = this.findIndex(identifier);
    const entry = this.queue[idx];
    return { value: entry.value, priority: entry.priority };
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