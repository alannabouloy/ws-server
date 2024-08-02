const app = require('../src/app');

describe('Songs endpoint', () => { //we are testing the /songs endpoint in this test suite
    const mockSongList = [ //we are creating some mock data for these tests which will include how we expect the songs data to be returned by the API
        {
            songId: 1, //each song in db will have a songId
            title: 'Tim McGraw',  //each song will have a title
            album: 'Debut', //each song will include the album it appears on
            storytags: ['hook', 'midpoint', 'thirdPlotPoint', 'closure'] //each song will include an array of storytags taken from an enum of six possible tags based on three act narrative structure
        },
        {
            songId: 2,
            title: 'Picture to Burn',
            album: 'Debut', 
            storytags: ['hook, firstPlotPoint', 'midpoint', 'thirdPlotPoint', 'climax', 'closure']
        },
        {
            songId: 3,
            title: `You're on Your Own Kid`,
            album: 'Midnights',
            storytags: ['firstPlotPoint', 'midpoint', 'thirdPlotPoint', 'climax']
        }
    ];
    describe('GET /songs', () => { //a simple GET to the /songs endpoint should return a list of all existing songs
        it('returns 200 and list of songs', () => {
            return supertest(app)
                .get('/songs')
                .expect(200, mockSongList) //for the purposes of this test, we will have the data mocked so that these songs are the only ones included in the test db
        });
    });
    describe('GET /songs by song title', () => { //including the song title in the request url will request a specific song by that title
        it('returns 200 and song details by title', () => { //we expect a successful request to send us a 200 and the song details that match with the title of the song
            const mockSong = mockSongList[0]; //we want to pick the first song from the mocked song list for our test song
            const songTitle = mockSong.title; //grabbing the title from the song object

            return supertest(app)
                .get(`/songs/${songTitle}`) //formatting the url for the get request to include the song title of the song we're searching for
                .expect(200, mockSong) //we expect a 200 response and the song object that matches the title we gave
        });
    });
    describe('POST /songs', () => { //now this is for adding songs to the /songs endpoint
        it('returns 201 and song details', () => { //since we're creating a new entry to db we are expecting a 201 success as a response along with the song details
            expectedSong = mockSongList[0]; //this will give us the formatted expected response for the first song in the list
            const newSong = { //this is the mocked request body we would be sending through. note how it doesn't include a song id as that will be generated automatically by the db
                title: expectedSong.title,
                album: expectedSong.album,
                storytags: expectedSong.storytags
            };

            return supertest(app)
                .post('/songs') //we are posting to that '/songs' endpoint
                .send(newSong) //sending through the request body which includes the fields in the newSong object
                .expect(201, expectedSong) //we expect the 201 response and the created song object which should now include that songId created in db
        });
    });
});