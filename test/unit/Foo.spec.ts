import Foo from '../../src/scripts/Foo';
import { expect } from '../bootstrap';

describe('Foo', function () {
  it('should create an instance of itself', function () {
    let instance = new Foo(4);

    expect(instance).to.be.instanceof(Foo);
  });
});

describe('Foo#promise', function () {
  var foo: Foo;

  before(function () {
    foo = new Foo(4);
  })

  it('should be a promise', function () {
    expect(foo.promise).to.be.a('promise');
  });

  it('should be resolved', function () {
    expect(foo.promise).to.be.fulfilled;
    return expect(foo.promise).to.eventually.equal(4);
  });
});

describe('Foo#getLatest', function () {
  var foo: Foo;

  before(function () {
    foo = new Foo(4);
  });

  it('should be async', function () {
    expect(foo.getLatest()).to.be.a('promise');
  });

  it('should be something we can wait on', async function () {
    let val = await foo.getLatest();
    expect(val).to.equal(4);
  });
});
