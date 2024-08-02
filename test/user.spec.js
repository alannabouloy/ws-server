const app = require('../src/app');

/*NOTE: Later on in the development of this server, we will be adding security protections to ensure that only authorized users can access sensitive information
but for now we will leave these endpoints without proper security protections. 
*/
describe('/users endpoint', () => { //we are testing the /users endpoint which does not yet exist
    describe('GET /users by username', () => { //this is to test the GET requests to the /users endpoint. these requests will be expected to provide a username.
        const username = 'alannaistrying'; //mock username
        context('User does not exist', () => { //context lets us know under which context we are testing. in this case we are testing the endpoint with the expected context being that the user does not exist
            it('returns 404 User Not Found', () => { //since the user doesn't exist in this context, we would expect it to return a 404 User Not Found error
                return supertest(app)
                    .get(`/users/${username}`) //we are testing the endpoint which will be able to include a username as part of the url
                    .expect(404, { //we are expecting a 404 and error message that says 'User Not Found' in this context
                        error: 'User Not Found'
                    });
            });
        });
        context('User exists', () => { //under this context, we are expecting that user we are giving already exists in the database
            it('returns 200 and user details', () => { //since the user exists, we would expect a 200 success response along with details of the user we were searching for
                const expectedUser = { //these are the details we can expect to be returned in our GET request
                    userId: 1, 
                    name: 'Alanna',
                    username: 'alannaistrying',
                    password: 'myPassword1!',
                    email: 'alanna@email.com'
                }
                return supertest(app)
                    .get(`/users/${username}`)
                    .expect(200, expectedUser) //this time we would expect that 200 response as well as an object that matches the information corresponding with the requested username
            })
        })
    })
})