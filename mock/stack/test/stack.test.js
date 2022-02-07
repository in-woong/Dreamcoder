const Stack = require('../stack.js');
describe('stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });
  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });
  it('insert value', () => {
    stack.insert('😍');
    expect(stack.size()).toBe(1);
  });
  describe('pop', () => {
    it('Throw an Error if Stack is Empty', () => {
      expect(() => stack.pop()).toThrow('stack is Empty');
    });

    it('return pushed item and remove it from the stack', () => {
      stack.insert('🍌');
      stack.insert('🍎');
      expect(stack.pop()).toBe('🍎');
      expect(stack.size()).toBe(1);
    });
  });
  describe('peek', () => {
    it('Throw an Error if Stack is Empty', () => {
      expect(() => stack.pop()).toThrow('stack is Empty');
    });

    it('return pushed item and keep it in the stack', () => {
      stack.insert('🍌');
      stack.insert('🍎');
      expect(stack.peek()).toBe('🍎');
      expect(stack.size()).toBe(2);
    });
  });
});
