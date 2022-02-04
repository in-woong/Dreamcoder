const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  test('init with 0', () => {
    expect(cal.value).toBe(0);
  });

  test('set', () => {
    cal.set(3);
    expect(cal.value).toBe(3);
  });

  test('clear', () => {
    cal.set(3);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  test('add', () => {
    cal.set(3);
    cal.add(23);

    expect(cal.value).toBe(26);
  });

  test("add should throw an Error if value is greater than 100", ()=>{
      cal.set(4);
      
      expect(()=>{
        cal.add(101);
      }).toThrow('Value can not be greater than 100')
  })

  test('subtract', () => {
    cal.set(6);
    cal.subtract(3);

    expect(cal.value).toBe(3);
  });

  test('multiply', () => {
    cal.set(3);
    cal.multiply(3);

    expect(cal.value).toBe(9);
  });
  describe('divides', () => {
    test('0/0 === NaN', () => {
      cal.divide(0);

      expect(cal.value).toBe(NaN);
    });
  });
  test('1/0 === Infinity', () => {
    cal.set(1);
    cal.divide(0);

    expect(cal.value).toBe(Infinity);
  });

  test('4/4 === 1', () => {
    cal.set(4);
    cal.divide(4);

    expect(cal.value).toBe(1);
  });
});
