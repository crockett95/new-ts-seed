import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinonChai from 'sinon-chai';
import * as sinonModule from 'sinon';

chai.use(sinonChai);
chai.use(chaiAsPromised);

export var { expect } = chai;
export var sinon = sinonModule;
