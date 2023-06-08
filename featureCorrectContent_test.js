const fs = require('fs');
const expect = require('chai').expect; 

//Read Test Data that has Input Data and Expected Results
const filePath = 'TestData.json';
const data = fs.readFileSync(filePath)
const testData = JSON.parse(data);

var responseData = [];

var TestCasesDataIndex = {
  one: 0,
  two: 1,
  three:2,
  four:3,
  five:4
  };

apiUrl = '/v1/cleaning-sessions';

BeforeSuite(({ I }) => { 
});

Feature('Verify POST results of Coords and Patches are the same as the ones expected, see TestData.json to check initial coords, patches and instructions of each TestCaseand its expected Result')

Before(({ I }) => { 

  //Obtain Api results for each test case and add it to an array
  const responseTestCase1 =  I.sendPostRequest(apiUrl, testData.TestCase1Data.inputEntered);
  responseTestCase1.then((data) => {
    savedData = data.data    
  }).finally((data) => {responseData.push(savedData);});

  const responseTestCase2 =  I.sendPostRequest(apiUrl, testData.TestCase2Data.inputEntered);
  responseTestCase2.then((data) => {
    savedData = data.data    
  }).finally((data) => {responseData.push(savedData);});

  const responseTestCase3 =  I.sendPostRequest(apiUrl, testData.TestCase3Data.inputEntered);
  responseTestCase3.then((data) => {
    savedData = data.data    
  }).finally((data) => {responseData.push(savedData);});

  const responseTestCase4 =  I.sendPostRequest(apiUrl, testData.TestCase4Data.inputEntered);
  responseTestCase4.then((data) => {
    savedData = data.data    
  }).finally((data) => {responseData.push(savedData);});

  const responseTestCase5 =  I.sendPostRequest(apiUrl, testData.TestCase4Data.inputEntered);
  responseTestCase5.then((data) => {
    savedData = data.data    
  }).finally((data) => {responseData.push(savedData);});

});

Scenario('Verify Coords and Patches are the ones expected for TestCase1', ({ I }) => {
  expect(responseData[TestCasesDataIndex.one].coords).to.deep.equal(testData.TestCase1Data.expectedOutput.coords,"Result Coords are not the ones expected");
  expect(responseData[TestCasesDataIndex.one].patches).to.deep.equal(testData.TestCase1Data.expectedOutput.patches,"Result Patches are not the ones expected");
});

Scenario('Verify Coords and Patches are the same in the response even if the input patches are in different order (Testcase1 and TestCase2)', ({ I }) => {
  expect(responseData[TestCasesDataIndex.two].coords).to.deep.equal(responseData[0].coords,"Not the same result in coords when changing order of patches");
  expect(responseData[TestCasesDataIndex.two].patches).to.deep.equal(responseData[0].patches,"Not the same result in patches when changing order of patches");
});

Scenario('Verify Coords and Patches are the ones expected for TestCase3', ({ I }) => {
  expect(responseData[TestCasesDataIndex.three].coords).to.deep.equal(testData.TestCase3Data.expectedOutput.coords,"Result Coords are not the ones expected");
  expect(responseData[TestCasesDataIndex.three].patches).to.deep.equal(testData.TestCase3Data.expectedOutput.patches,"Result Patches are not the ones expected");
});

Scenario('Verify Coords and Patches are the ones expected for TestCase4', ({ I }) => {
  expect(responseData[TestCasesDataIndex.four].coords).to.deep.equal(testData.TestCase4Data.expectedOutput.coords,"Result Coords are not the ones expected");
  expect(responseData[TestCasesDataIndex.four].patches).to.deep.equal(testData.TestCase4Data.expectedOutput.patches,"Result Patches are not the ones expected");
});

Scenario('Verify Coords and Patches are the ones expected for TestCase5', ({ I }) => {
  expect(responseData[TestCasesDataIndex.five].coords).to.deep.equal(testData.TestCase5Data.expectedOutput.coords,"Result Coords are not the ones expected");
  expect(responseData[TestCasesDataIndex.five].patches).to.deep.equal(testData.TestCase5Data.expectedOutput.patches,"Result Patches are not the ones expected");
});

AfterSuite(({ I }) => { 
});

