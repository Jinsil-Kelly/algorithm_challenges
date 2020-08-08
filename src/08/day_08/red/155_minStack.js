class MinStack {
  constructor() {
    this.stack = [];
  }

  push(record) {
    const obj = { val: record, min: record };
    const min = this.stack[this.stack.length - 1]?.min;
    if (min !== undefined) {
      obj.min = Math.min(record, min);
    }
    this.stack.push(obj);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1]?.val;
  }

  getMin() {
    return this.stack[this.stack.length - 1]?.min;
  }
}

// const testStack = new MinStack();
// testStack.push(-2)
// testStack.push(0)
// testStack.push(-1)
// console.log(testStack.getMin())
// console.log(testStack)
