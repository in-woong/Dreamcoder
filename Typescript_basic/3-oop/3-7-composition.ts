{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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

  interface MilkMaker {
    addMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarMaker {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  //재료
  class CheapMilkSteamer {
    private steamMilk(): boolean {
      console.log('Steaming Milk...🥛');
      return true;
    }
    addMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  class FancyMilkSteamer {
    private steamMilk(): boolean {
      console.log('Fancy Steaming Milk...🥛');
      return true;
    }
    addMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  class ColdMilkSteamer {
    private steamMilk(): boolean {
      console.log('Cold Steaming Milk...🥛');
      return true;
    }
    addMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  class NoMilkStreamer {
    addMilk(cup: CoffeeCup): CoffeeCup {
      console.log('No milk');
      return cup;
    }
  }

  class CandySugarMixer {
    private getSugar(): boolean {
      console.log('Getting some sugar from Candy 🍭');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer {
    private getSugar(): boolean {
      console.log('Getting some sugar from Jar 🍭');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class GoldSugarMixer {
    private getSugar(): boolean {
      console.log('Getting some sugar from Gold 🍭');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugarMixer {
    addSugar(cup: CoffeeCup): CoffeeCup {
      console.log('No sugar');
      return cup;
    }
  }

  //커피머신
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class Level
    private coffeeBeans: number = 0;

    //static이 있으므로 constructor를 생성할 수 없도록 private로 막는다.
    constructor(
      coffeeBeans: number,
      private milkFother: MilkMaker,
      private sugarMixer: SugarMaker
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    //static이 있는 것은 생성자 함수로 선언을 해주는 상황을 없애기 위해서이므로 constructor를 생성할 수 없도록 private으로 막는다
    // static makeMachine(coffeeBeans: number) {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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
      const coffee = this.extract(shots);
      return this.milkFother.addMilk(this.sugarMixer.addSugar(coffee));
    }
    clean() {
      console.log('cleaning...💧');
    }
  }

  const cheapMilk = new CheapMilkSteamer();
  const fancyMilk = new FancyMilkSteamer();
  const coldMilk = new ColdMilkSteamer();
  const noMilk = new NoMilkStreamer();

  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const goldSugar = new GoldSugarMixer();
  const noSugar = new NoSugarMixer();

  const sweetCandyMachine = new CoffeeMachine(32, noMilk, candySugar);
  console.log(sweetCandyMachine.makeCoffee(3));
}
