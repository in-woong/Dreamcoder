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

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class Level
    private coffeeBeans: number = 0;

    //static이 있으므로 constructor를 생성할 수 없도록 private로 막는다.
    private constructor(coffeeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee(shots: number) {
      const coffee = this.machine.makeCoffee(shots);
      console.log(coffee);
    }
  }

  class BaristarUser {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee(shots: number) {
      this.machine.fillCoffeeBeans(50);
      const coffee = this.machine.makeCoffee(shots);
      this.machine.clean();
      console.log(coffee);
    }
  }
  const dolche = CoffeeMachine.makeMachine(14);
  const user1 = new AmateurUser(dolche);
  user1.makeCoffee(2);
  const user2 = new BaristarUser(dolche);
  user2.makeCoffee(1);
}
