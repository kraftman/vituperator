'use strict';
const { fastify } = require('../../src/index.js');
const chai = require('chai');
chai.should();

const getFakePayload = () => {
  return {
    action: 'edited',
    pull_request: {
      merge_commit_sha: 'c50b7f426057bb498a0a6501396a021776b20af6',
      statuses_url: 'https://api.github.com/repos/kraftman/vituperator/statuses/3f40054320ebe7277e297f4877af473712da4cae',
      title: 'testtitle',
      body: 'testbody'
    }
  }
}

describe('test', () => {
  it('test', async () => {
    const fakeHook = getFakePayload();
    const result = await fastify.inject({
      method: 'POST',
      url: '/hook',
      payload: fakeHook
    })
    result.body.should.equal('ok')
  })
})