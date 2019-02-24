/**
 * The Foo class for testing
 *
 * @class
 */
export default class Foo {
  /**
   * The internally held promise
   *
   * @private
   */
  private _promise: Promise<number>;

  /**
   * Foo constructor
   * @param promiseVal {number} The resolution of the promise
   */
  constructor(promiseVal: number) {
    this._promise = Promise.resolve(promiseVal);
  }

  /**
   * The public promis
   * @return {Promise<void>} It's a promise!
   */
  public get promise(): Promise<number> {
    return this._promise;
  }

  /**
   * A test async method
   *
   * @return {Promise<number>}
   */
  public async getLatest(): Promise<number> {
    return await this.promise;
  }
}
