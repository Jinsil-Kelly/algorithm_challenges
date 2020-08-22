// https://leetcode.com/problems/implement-stack-using-queues/
// eslint-disable-next-line max-classes-per-file
class MyQueue {
  constructor() {
    this.queue = [];
  }

  push(record) {
    this.queue.push(record);
  }

  pop() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }
}

class MyStack {
  constructor() {
    this.q1 = new MyQueue();
    this.q2 = new MyQueue();
  }

  push(record) {
    if (this.q1.peek() === undefined && this.q2.peek() === undefined) {
      this.q1.push(record);
      return;
    }
    if (this.q1.peek() === undefined && this.q2.peek() !== undefined) {
      this.q2.push(record);
      return;
    }
    if (this.q2.peek() === undefined && this.q1.peek() !== undefined) {
      this.q1.push(record);
    }
  }

  top() {
    let cur = null;
    if (this.q1.peek() !== undefined) {
      while (this.q1.peek() !== undefined) {
        cur = this.q1.pop();
        this.q2.push(cur);
      }
      return cur;
    }

    if (this.q2.peek() !== undefined) {
      while (this.q2.peek() !== undefined) {
        cur = this.q2.pop();
        this.q1.push(cur);
      }
      return cur;
    }
    return undefined;
  }

  pop() {
    let cur = null;
    if (this.q1.peek() !== undefined) {
      while (1) {
        cur = this.q1.pop();
        if (this.q1.peek() !== undefined) {
          this.q2.push(cur);
        } else {
          return cur;
        }
      }
    }

    if (this.q2.peek() !== undefined) {
      while (1) {
        cur = this.q2.pop();
        if (this.q2.peek() !== undefined) {
          this.q1.push(cur);
        } else {
          return cur;
        }
      }
    }
    return undefined;
  }

  empty() {
    return !this.q1.peek() && !this.q2.peek();
  }
}
