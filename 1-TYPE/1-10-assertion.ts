{
  /**
   * Type Assertions💩
   */
  function jsStrFunc(): any {
    return 4;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(3)); //💩

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbes = findNumbers();

  const button = document.querySelector('class');
  
}
