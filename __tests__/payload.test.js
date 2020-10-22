const exampleRequest = require('./utils/exampleRequest.json');
const filterEligibleShows = require('../src/services/FilterEligibleShows');
const listEligible = require('../src/models/Show').listEligible;

describe('payloadFilter', () => {
  it('should only return shows with DRM enabled and # of episodes >= 1', async () => {
    const { payload } = exampleRequest;

    const filteredShows = await filterEligibleShows.execute(payload);

    expect(filteredShows.length).toBe(7);
  })
})

describe('listEligibleShows', () => {
  it('should list filtered shows with specific fields', async () => {
    const { payload } = exampleRequest;
    const requiredFields = ["image", "slug", "title"];
    
    const showsList = await listEligible(payload);

    const correctKeys = showsList.every(show => {
      return Object.keys(show) == requiredFields;
    })

    expect(showsList.length).toBe(7);
    expect(correctKeys).toBe(true);
  })
})