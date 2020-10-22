const exampleRequest = require('./utils/exampleRequest.json');
const filterEligibleShows = require('../src/services/FilterEligibleShows');

describe('payloadFilter', () => {
  it('should only return shows with DRM enabled and # of episodes >= 1', async () => {
    const { payload } = exampleRequest;

    const filteredShows = await filterEligibleShows.execute(payload);

    expect(filteredShows.length).toBe(7);
  })
})