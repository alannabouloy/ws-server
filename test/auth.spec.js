const app = require('../src/app'); //imports the app into the file

describe('Auth Endpoints', () => { //this lets us know we are testing the Authorization endpoints 
    describe('/signup endpoint', () => {//this lets us know we are running tests for the /signup endpoint
        it('responds 201', () => { //this is what we call the happy path. if everything goes right and signup is successful, we can expect this result
            const newUser = { //we're creating a mock user to send in our post request. whatever we include in this object will be what we expect to see included in a request body sent to this endpoint
                name: 'Alanna',
                username: 'alannaistrying',
                password: 'myPassword1!',
                email: 'alanna@email.com'
            };

            return supertest(app) //we are running that supertest functionality calling on the app
                .post('/signup') //this is mocking a post request to the /signup endpoint which does not yet exist
                .send(newUser) //this tells us we are sending the newUser object as part of the request body
                .expect(201) //this tells us that we expect a 201 code in response (communicating that the request was successful and a new user was created)
        });
    });
    describe('/signin endpoint', () => { //this lets us know we are running tests for the /signin endpoint
        it('responds 200 with token if signin was successful', () => { //we want to make sure that we receive a 200 code and an auth token in the response back on a successful login
            const testUser = { //this is our mocked user credentials. we should assume in this test that they are valid credentials. we'll do validations and tests for invalid credentials later on. 
                username: 'alannaistrying',
                password: 'myPassword1!'
            };

            const expectedToken = 'authorized'; //this is a mock token that we want to receive back from a successful login attempt

            return supertest(app) 
                .post('/signin')//we are sending a post request to the /signin endpoint now
                .send(testUser) //we are sending through the mocked credentials in the request body
                .expect(200, expectedToken) //we expect that the response back will be a 200, letting us know the request was successful, as well as an auth token that we can use to prove we are authorized going forward. 
        });
    });
});