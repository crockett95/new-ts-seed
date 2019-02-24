import { default as Baz, IBaz } from './Baz';

/**
 * The bar class
 *
 * @class
 */
export class Bar {
  /**
   * A check for unused types in declarations
   */
  protected baz: IBaz = new Baz();

  /**
   * Returns the string 'foo'
   *
   * @return {string} 'foo'
   */
  public getFoo(): string {
    return 'bar foo';
  }

  /**
   * The test iterator
   * @param count {number} How many times to yield a one
   */
  public *getOnes(count: number): Iterable<number> {
    let i = 0;
    while (i++ < count) {
      yield 1;
    }
  }
}
