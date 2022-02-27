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
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class Level
    private coffeeBeans: number = 0;

    //static이 있으므로 constructor를 생성할 수 없도록 private로 막는다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    //static이 있는 것은 생성자 함수로 선언을 해주는 상황을 없애기 위해서이므로 constructor를 생성할 수 없도록 private으로 막는다
    static makeMachine(coffeeBeans: number) {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker1 = CoffeeMaker.makeMachine(32);
  const maker2 = CoffeeMaker.makeMachine(52);
  console.log(maker2);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge: number = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(age: number) {
      if (age < 0) {
        throw Error('value has to bigger than zero');
      }
      this.internalAge = age;
    }
    // fullName: string;
    // firstName: string;
    // lastName: string;
    constructor(private firstName: string, private lastName: string) {
      //   this.firstName = firstName;
      //   this.lastName = lastName;
      //   this.fullName = `${this.firstName}${this.lastName}`;
    }
  }
  const user1 = new User('seteve', 'jobs');
  console.log(user1.fullName);
  console.log(user1.age);
  user1.age = 22;
  console.log(user1.age);
  //   user1.firstName = 'Ellie';
}
