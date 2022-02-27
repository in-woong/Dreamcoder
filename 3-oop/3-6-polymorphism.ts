{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar: boolean;
  };
  type Coffee = {
    coffeeBeans: number;
  };

  //public
  //private
  //protected
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class Level
    private coffeeBeans: number = 0;

    //static이 있으므로 constructor를 생성할 수 없도록 private로 막는다.
    protected constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //static이 있는 것은 생성자 함수로 선언을 해주는 상황을 없애기 위해서이므로 constructor를 생성할 수 없도록 private으로 막는다
    static makeMachine(coffeeBeans: number) {
      return new CoffeeMachine(coffeeBeans);
    }

    private grindCoffee(shots: number) {
      console.log(`I'm grinding Coffee for ${shots}shots`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log(`preheating...🔥`);
    }

    private extract(shots: number) {
      console.log(`Extracting ${shots}shots`);
      return {
        shots,
        hasMilk: false,
        hasSugar: false,
      };
    }

    fillCoffeeBeans(beans: number) {
      console.log(`filling coffeBeans ++${beans}`);
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindCoffee(shots);
      this.preheat();
      return this.extract(shots);
    }
    clean() {
      console.log('cleaning...💧');
    }
  }

  class LatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans);
    }
    private steamMilk(): void {
      console.log('Steaming Milk...🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private addSugar() {
      console.log('Add Sugar');
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }
  const machines: CoffeeMaker[] = [
    new LatteMachine(30, 'SSS'),
    new SweetCoffeeMachine(40, 'www'),
    new LatteMachine(30, 'eee'),
    new SweetCoffeeMachine(40, 'rrr'),
    new LatteMachine(30, 'ttt'),
    new SweetCoffeeMachine(40, 'yyy'),
    new LatteMachine(30, 'uuu'),
    new SweetCoffeeMachine(40, 'qqq'),
  ];

  machines.forEach((machine) => {
    console.log('----------------------------');
    machine.makeCoffee(3);
  });
}
