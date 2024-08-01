const app = require('../src/app');

describe('App', () => { //describe statement lets us know what this test is meant to be testing
    it('GET "/" responds with 200 containing "running with my dress unbuttoned"', () => {  //it statement asserts what we should expect for a passing test, the song quote is just for fun
        return supertest(app) //this uses the supertest function to run the app so that we can call on endpoints
        .get('/') //calling the '/' endpoint
        .expect(200, 'running with my dress unbuttoned') //assertion of what to expect back from the endpoint
    });
});