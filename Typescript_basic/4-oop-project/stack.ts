interface Stack {
  readonly size: number;
  pop(): string;
  push(value: string): void;
}

interface StackNode {
  readonly value: string;
  next?: StackNode;
}

class NodeImpl implements StackNode {
  readonly value: string;
  next?: StackNode;
  constructor(value: string) {
    this.value = value;
  }
}

class StackImpl implements Stack {
  private _size: number = 0;
  //외부와 내부의 사용하는 것 이름이 동일할때는 _를 사용하자
  private head?: StackNode;
  get size() {
    return this._size;
  }
  constructor(private capacity: number) {}

  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }
    const currNode = this.head;
    this.head = currNode.next;
    this._size--;
    return currNode.value;
  }

  push(newValue: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }
    const node = new NodeImpl(newValue);
    node.next = this.head;
    this.head = node;
    this._size++;
  }
}

const stack = new StackImpl(7);
stack.push('Ellie 1');
stack.push('Bob 2');
stack.push('Steve 2');
console.log(stack);

while (stack.size !== 0) {
  console.log(stack.pop());
}
