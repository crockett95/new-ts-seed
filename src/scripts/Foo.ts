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
  private _promise: Promise<void> = Promise.resolve();

  /**
   * The public promis
   * @return {Promise<void>} It's a promise!
   */
  public get promise(): Promise<void> {
    return this._promise;
  }
}
