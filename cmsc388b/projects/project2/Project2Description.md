# Project 2: Build your own node cli application

## Due Date: Thursday, January 17, 2019 8:00 PM
## Objectives: To build your a node cli application that allows the user to see contents of a file or make a copy of the file, i.e. create your own version of the unix command line `cat` and `cp` commands.

## Specifications/Requirements
For this project you will be building a node cli application named `file_commander`. We have provided you with the directory in which all of your source code will go as well as a `gitignore` file filled out so you don't accidentally commit any unncecessary files to your repo. There is another reason why we are providing this file which I will answer in class on Tuesday. Your application will have to follow a similar structure to the application we built together in class as part of the code-along exercise. The requirements for this project are as follows:
1. Your application should contain a `package.json` file at the root of your application. You should create this file by navigating inside the project directory and running the `npm init` command.
2. You will need to use 2 node modules not written by yourselves: `fs` and `minimist`. You do not need to add `fs` to your `package.json` file but you will need to do so for `minimist`. To have npm autopopulate this dependency inside of your `package.json` file you will need to pass the `--save` flag when installing `minimist`.
3. There should be a `bin` directory with a file named `file_commander` inside of it. When this file is made executeable it will serve as the entry point into your application. It should only require a file named `app.js` that you will create and invoke any necessary functions you export from `app.js`.
4. There should be a file named `app.js` at the root level of your application. This file will serve as the main logic of your application and will have to provide the following functionality:
    1. It will need to provide the user access to the functions `peek_inside` and `copy_file`. When executing the `peek_inside` function the full contents of a file that is passed as a parameter should be displayed in the console to the user (just like the `cat` unix command line function). The `copy_file` function will copy an entire existing text file (exactly like the unix `cp source.txt copy.txt`).
    2. For each of these functions the user should be able to get information about the functions by either executing `file_commander help peek_inside` or `file_commander peek_inside -h` (the same is true for both functions). 
    3. The expected format for the `peek_inside` function is `file_commander peek_inside path/to/file`. If the file does not exist you will need to catch the errror and let the user know that the requested file does not exist. The program should not terminate.
    4. If you do not invoke the `peek_inside` function with a file to get the contents of your program should respond with the following response: "missing parameter(s). Try running the help command to see the proper format for executing the function."
    5. The expected format for the `copy_file` function is `file_commander copy_file path/to/sourcefile path/to/copy`. If the source file does not exist you need to cath the error and let the user know that the file does not exist. 
    6. If you fail to provide the program with both parameters your program should respond to the user with the following response: "missing parameter(s). Try running the help command to see the proper format for executing the function".
5. The output from running the `help` command or any of its variants should mimic the format and content of what is in the `weather` app. As a reminder you can find the code for the `weather` app inside of your repo at `cmsc388b/code_along/weather`.   

## Additional Information
1. It is assumed that the user has all the read and write permissions to look inside of any file requested and that the user can write to the directory passed as a parameter.
2. Your program should follow the same patter of the `weather` application. i.e. it should only load the necessary files when absolutely necessary.
3. We will test your application by taking the following steps:
    1. Cloning your repo and navigating to your `file_commander` directory.
    2. executing `npm install` from inside your project directory to get any necessary dependencies.
    3. we will make your executable by running `chmod +x bin/file_commander`.  