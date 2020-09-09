# Project 1: Build your own web client and server

## Due Date: Thursday, January 10, 2019 8:00 PM
## Objectives: To build your first node application and gain practice with our git workflow for distributiing course materials and submitting projects.

## Specifications/Requirements
We have provided you with 3 started files: `index.html`, `client.js` and `server.js`. Do not modify the `index.html` at all since our automated test scripts use it to validate your project implementation.

1. `server.js` Build your basic application server to listen on port `8000`. It should have the following functionality:
  * It should print out to the console that the server started successfully and what port it is running on.
  * It only needs to respond with a request for the contents of the static `index.html` file. If the request is for a file other than `index.html` it should respond with a message to the console with the contents of the error message along with a custom message that the selected resource does not exist on the server. It should also respond to the client with a 404 error.
  
2. `client.js` This script will make a request for the resource that your implementation of `server.js` will provide. It needs to do 2 things:
  * provide the contents of the http request to the user in the console.
  * create a new file called `request.txt` that will contain the results of the http request.

3. To test your application locally you will need to start your server in one terminal window and then execute your `client.js` script in a separate terminal. 

4. We have provided you with the npm packages you need to use for each script. You are not allowed to add any additional npm packages for your implementaions.

