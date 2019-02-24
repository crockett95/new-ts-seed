export interface IBaz {
  /** Something to make this not empty */
  readonly a: string;
}

/**
 * An internal class that's not available outside the package
 */
export default class Baz implements IBaz {
  /**
   * Bare minimum
   */
  public a: string = '';
}
