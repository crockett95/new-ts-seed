import { Bar } from '../../src/scripts/Bar';
import { expect, sinon } from '../bootstrap';

describe('Bar', function () {
  it('should be defined', function () {
    expect(Bar).to.exist;
  });

  it('should be a constructor', function () {
    expect(() => new Bar()).not.to.throw();
    expect(() => (Bar as any)()).to.throw();

    let bar = new Bar();
    expect(bar).to.be.instanceof(Bar);
  });

  describe('getFoo', function () {
    let bar: Bar;

    before(function () {
      bar = new Bar();
    });

    it('should be a method', function () {
      expect(bar.getFoo).to.be.a('function');
      expect(() => bar.getFoo()).not.to.throw();
    });

    it('should return a string', function () {
      expect(bar.getFoo()).to.be.a('string');
    });
  });

  describe('getOnes', function () {
    let bar: Bar;

    before(function () {
      bar = new Bar();
    });
    
    it('should be a method', function () {
      expect(bar.getOnes).to.exist;
      expect(() => bar.getOnes(0)).not.to.throw();
    });

    it('should be iterable', function () {
      expect(() => {
        for (let i of bar.getOnes(1)) void 0;
      }).not.to.throw();
    });

    it('should iterate according to the count passed in', function () {
      let spy = sinon.fake();

      for (let i of bar.getOnes(13)) {
        spy();
      }

      expect(spy).to.have.callCount(13);
    });

    it('should always yield 1', function () {
      for (let i of bar.getOnes(13))
        expect(i).to.equal(1);
    })
  })
})
