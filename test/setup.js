const { expect } = require('chai'); // adding expect function from chai testing library
const supertest = require('supertest'); //adding supertest from dependencies

global.expect = expect; //creating a global instance of expect
global.supertest = supertest; //creating a global instance of supertest