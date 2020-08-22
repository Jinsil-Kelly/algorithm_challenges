// https://leetcode.com/problems/implement-queue-using-stacks/

// eslint-disable-next-line max-classes-per-file
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class MyQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  push(record) {
    this.s1.push(record);
  }

  peek() {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }
    const result = this.s2.peek();

    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }
    return result;
  }

  pop() {
    while (this.s1.peek()) {
      this.s2.push(this.s1.pop());
    }
    const result = this.s2.pop();
    while (this.s2.peek()) {
      this.s1.push(this.s2.pop());
    }
    return result;
  }

  empty() {
    return !this.s1.peek();
  }
}
