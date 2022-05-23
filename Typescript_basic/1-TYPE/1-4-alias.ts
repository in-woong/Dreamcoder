{
  /**
   * Type Aliases.
   */

  type Text = string;
  const name: Text = 'Ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: 'inwoong',
    age: 3,
  };

  /**
   * String Literal Types
   */

  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}
