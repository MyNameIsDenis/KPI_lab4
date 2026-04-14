class PriorityQueue {
  queue = [];

  enqueue(item, priority) {
  this.queue.push({ value: item, priority: priority });
}

}

export default PriorityQueue;