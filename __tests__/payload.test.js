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
  it('should return a list of eligible shows with specific fields', async () => {
    const { payload } = exampleRequest;
    const requiredFields = ["image", "slug", "title"];
    
    //Helper function to compare the required fields with the return object keys
    function equivalentArrays(arr1, arr2) {
      return arr1.length === arr2.length && arr1.every((entry, ind) => {
        return entry === arr2[ind];
      });
    }

    const showsList = await listEligible(payload);

    const correctKeys = showsList.every(show => {
      const keys = Object.keys(show);
      return equivalentArrays(keys, requiredFields);
    })

    expect(showsList.length).toBe(7);
    expect(correctKeys).toBe(true);
  })
})