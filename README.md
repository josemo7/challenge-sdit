Solution: Platform Science SDET Assignment
==========================================


## Instructions
-Fork the repo
-Open terminal in the project folder

## How to execute the service to test
### Requirements
- Docker v.18+
-Visual studio code

### Building the service
From the root of this repository, run the following:

- `sudo chmod +x service/run.sh`
- `docker build -t pltsci-sdet-assignment service`

### Running the service
- `docker run -d -p 8080:8080 --name pltsci-sdet-assignment pltsci-sdet-assignment`

### Hitting the endpoint
You can test whether the service is running correctly by executing the following command:
- `curl -H 'Content-Type: application/json' -X POST -d '{ "roomSize" : [5, 5], "coords" : [1, 2], "patches" : [ [1, 0], [2, 2], [2, 3] ], "instructions" : "NNESEESWNWW" }' http://localhost:8080/v1/cleaning-sessions`

Note: you can user POSTMAN to get results easily instead of curling the service

## Instructions get running with the test suite

-Install codeceptjs by using
`npx create-codeceptjs .`
-Wait for the installation
-Init codeceptjs project by using
`npx codeceptjs init`
and follow this instructions:
- Do you plan to write tests in TypeScript? No
-Where are your tests located? Enter
-What helpers do you want to use?  Select REST
-Do you want to use JSONResponse helper for assertions on JSON responses? Yes
-Where should logs, screenshots, and reports to be stored? ENTER
-Do you want to enable localization for tests? English
-[REST] Endpoint of API you are going to test: http://localhost:8080
-Feature which is being tested (ex: account, login, etc) ENTER feature
-Filename of a test: Enter

In the terminal run the test using:
`npx codeceptjs run --steps`

## Deliverable

Bugs founded: function that returns the sum of patches cleaned is not working as expected, when some combinantions of South and West in the instruction string, it adds up non-existent patches

The testcases its expected data were verified using a manual approach by using POSTMAN and drawn diagrams(images attached), after knowing the correct value, Automation was done