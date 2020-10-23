const request = require('supertest');

const app = require('../src/app');
const exampleRequest = require('./utils/exampleRequest.json');
const invalidRequest  = require('./utils/invalidRequest.json');


describe('ShowController', () => {
  it('should receive a valid payload and succesfully return eligible shows', async () => {
    const response = await request(app)
    .post('/api/shows')
    .send(exampleRequest)

    const responseArray = response.body.response;

    expect(response.headers["content-type"]).toContain("application/json");
    expect(response.status).toBe(200);
    expect(responseArray.length).toBe(7);
  })
});

describe('ShowController', () => {
  it('should return an error when invalid JSON data is received', async () => {
    const response = await request(app)
    .post('/api/shows')
    .send(invalidRequest);

    expect(response.headers["content-type"]).toContain("application/json");
    expect(response.status).toBe(400);
    expect(response.text).toBe(`{"error":"Could not decode request: JSON parsing failed"}`); 
  })
});
