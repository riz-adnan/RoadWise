import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// Create a new instance of MinPriorityQueue
const priorityQueue = new MinPriorityQueue();

// Function to enqueue elements into the priority queue
const enqueue = (element, priority) => {
  // Enqueue the element with its priority
  priorityQueue.enqueue({ element, priority });
};

// Example usage
enqueue([2,3], 3);
enqueue([3,4], 1);
enqueue([4,5], 2);

let top=priorityQueue.dequeue();
console.log(top);
top=priorityQueue.dequeue();
console.log(top);
top=priorityQueue.dequeue();
console.log(top);
