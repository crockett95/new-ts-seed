import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import * as sinonModule from 'sinon';

chai.use(sinonChai);
chai.use(chaiAsPromised);

export var { expect } = chai;
export var sinon = sinonModule;
