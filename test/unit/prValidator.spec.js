'use strict';
const prvalidator = require('../../src/prValidator.js');
const chai = require('chai');
chai.should();
const getFakeHook = () => {
  return {
    title: 'test',
    body: 'test',
  };
};

describe('prvalidator tests', () => {
  it('is successful if all requirements are correct', () => {
    const fakeHook = getFakeHook();
    const fakeTemplate = 'differentTemplate';
    const result = prvalidator.validate(fakeHook, fakeTemplate);
    result.state.should.equal('success');
    result.description.should.equal('All checks passed');
  });
  it('should fail if the title only contains a ticket ID', () => {
    const fakeHook = getFakeHook();
    fakeHook.title = 'FAKETICKET-1234';
    const fakeTemplate = 'differentTemplate';
    const result = prvalidator.validate(fakeHook, fakeTemplate);
    result.state.should.equal('failure');
    result.description.should.equal(
      'Title needs description not just ticket ID',
    );
  });
  it('should fail if the description hasnt been updated', () => {
    const fakeHook = getFakeHook();
    fakeHook.body = 'defaultTemplate';
    const fakeTemplate = 'defaultTemplate';
    const result = prvalidator.validate(fakeHook, fakeTemplate);
    result.state.should.equal('failure');
    result.description.should.equal('Description has not been updated');
  });
});
