{
  /**
   * Intersection Types: &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId, person.work());
  }

  internWork({
    name: 'ellie',
    score: 100,
    employeeId: 39,
    work: () => 'hello',
  });
}
