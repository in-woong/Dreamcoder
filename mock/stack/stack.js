class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }
  size() {
    return this._size;
  }

  pop() {
    if (this._size < 1) {
      throw new Error('stack is Empty');
    }
    const value = this.head.value;
    this.head = this.head.next;
    this._size --;

    return  value;
  }

  insert(value) {
    const newNode = new Node(value);
      if(this.head ===null){
        this.head = newNode;
        this._size++;
        return;
      }
    newNode.next = this.head;
    this.head = newNode;
    this._size++;
  }

  peek() {
    if (this._size < 1) {
      throw new Error('stack is Empty');
    }
    return this.head.value;
  }
}

const stack = new Stack();
stack.insert(3);
stack.pop();
stack.insert(5);
stack.insert(6);
stack.insert(7);
stack.pop();
stack.insert(8);

module.exports = Stack;
