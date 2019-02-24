/**
 * The bar class
 *
 * @class
 */
export class Bar {
  /**
   * Returns the string 'foo'
   *
   * @return {string} 'foo'
   */
  public getFoo(): string {
    return 'bar foo';
  }

  public *getOnes(count: number): Iterable<number> {
    let i = 0;
    while (i++ < count) {
      yield 1;
    }
  }
}
