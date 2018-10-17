const prvalidator = require('../../src/prValidator.js');
const chai = require('chai');
chai.should();
const getFakeHook = () => {
  return {
    title: 'test',
    body: 'test'
  }
}

describe('prvalidator tests', () => {
  it('is successful if all requirements are correct', () => {
    const fakeHook = getFakeHook();
    const fakeTemplate = 'differentTemplate';
    const result = prvalidator.validate(fakeHook, fakeTemplate);
    result.state.should.equal('success');
    result.description.should.equal('All checks passed')
  })
})