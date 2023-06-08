

const joi = require('joi');
const fs = require("fs");

const resultExample = 
{
  roomSize: [5, 5],
  coords: [1, 2],
  patches: [ [1, 0], [2, 2], [2, 3] ],
  instructions: 'NNESEESWNWW'
};


Feature('Verify POST calls can be done sucesfully')

const roombaSchema = joi.object({
  coords: joi.array(),
  patches: joi.number()
}).unknown();

Scenario('I make a POST Call with example parameters and get 2xx code', ({ I }) => {

  I.sendPostRequest('/v1/cleaning-sessions', resultExample);
  I.seeResponseCodeIsSuccessful();
})

Scenario('I make a POST Call with example parameters and get specific 200 code', ({ I }) => {

  I.sendPostRequest('/v1/cleaning-sessions', resultExample);
  I.seeResponseCodeIs(200);
})

Scenario('I receive the response with a Json response', ({ I }) => {
  
  I.sendPostRequest('/v1/cleaning-sessions', resultExample);
  I.seeResponseContainsJson();
  
})

Scenario('I receive the response with expected keys', ({ I }) => {
  
  I.sendPostRequest('/v1/cleaning-sessions', resultExample);
  I.seeResponseContainsKeys(['coords', 'patches']);
  I.seeResponseMatchesJsonSchema(roombaSchema);
})

Scenario('I receive the response with expected Json schema', ({ I }) => {
  
  I.sendPostRequest('/v1/cleaning-sessions', resultExample);
  I.seeResponseMatchesJsonSchema(roombaSchema);
  
})

Scenario('I make a GET Call without headers',({ I }) => {

  const response = I.sendGetRequest('/v1/cleaning-sessions');
  I.seeResponseCodeIsClientError();
})

//Other methods that could be used in API testing:
//I.amBearerAuthenticated()
//I.haveRequestHeaders()
//I.seeResponseCodeIsRedirection()
//I.seeResponseValidByCallback()
//I.seeResponseCodeIsSuccessful(); // matches 200, 201, 202, ... 206
//I.seeResponseCodeIsRedirection(); // matches 300...308
//I.seeResponseCodeIsClientError(); // matches 400..451
//I.seeResponseCodeIsServerError(); // matches 500-511

