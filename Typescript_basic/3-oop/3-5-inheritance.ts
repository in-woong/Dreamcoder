{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
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
    private steamMilk():void {
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

  const latteMachine = new LatteMachine(23, "SSSS");
  const coffee =latteMachine.makeCoffee(1);
  console.log(latteMachine);
}
