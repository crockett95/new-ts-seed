import Foo from '../../src/scripts/Foo';
import { expect } from '../bootstrap';

describe('Foo', function () {
  it('should create an instance of itself', function () {
    let instance = new Foo();

    expect(instance).to.be.instanceof(Foo);
  });
});

describe('Foo#promise', function () {
  var foo: Foo;

  before(function () {
    foo = new Foo();
  })

  it('should be a promise', function () {
    expect(foo.promise).to.be.a('promise');
  });

  it('should be resolved', function () {
    expect(foo.promise).to.be.fulfilled;
    expect(foo.promise).to.become(undefined);
  });
})
