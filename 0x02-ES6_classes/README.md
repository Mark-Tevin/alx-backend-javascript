# 0x02. ES6 Classes

## Overview
This project covers Object-Oriented Programming (OOP) concepts using JavaScript with ES6 classes. The focus is on learning how to define classes, implement methods, utilize static methods, extend classes, and explore advanced topics like metaprogramming and symbols.

---

## Learning Objectives
By the end of this project, you will be able to:
- Define a class and add methods to it.
- Implement static methods within a class.
- Extend classes from other classes.
- Utilize metaprogramming techniques with symbols.

## Project Requirements
- All files are executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- Code should be written using the `.js` extension.
- Code will be tested with **Jest** using the command `npm run test`.
- Code will be verified with **ESLint** for linting purposes.
- All files should end with a new line.
- A `README.md` file is required at the root of the project.

## Setup
### Node.js Installation (v12.11.x)
In your home directory, run the following commands to install Node.js:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

Verify the installation:
$ nodejs -v
v12.11.1
$ npm -v
6.11.3

install Jest, Babel, and ESLint
In the project directory, install the required dependencies using the provided package.json:
npm install

Running Tests and Linting
* To run all tests:
npm run test

* To check for linting issues:
npm run lint

* To run both tests and linting checks:
npm run full-test

## Project Structure

0x02-ES6_classes/
│
├── 0-classroom.js          # Class implementation for ClassRoom
├── 1-make_classrooms.js    # Function to initialize rooms
├── 2-hbtn_course.js        # Class implementation for HolbertonCourse
├── 3-currency.js           # Class implementation for Currency
├── 4-pricing.js            # Class implementation for Pricing
├── 5-building.js           # Abstract class Building
├── 6-sky_high.js           # Inheritance class SkyHighBuilding
├── 7-airport.js            # Class Airport
├── 8-holberton_class.js    # Class HolbertonClass
├── babel.config.js         # Babel configuration
├── package.json            # Project metadata and dependencies
└── .eslintrc.js            # ESLint configuration

## Tasks
0. ClassRoom
Implement a class ClassRoom that accepts an attribute maxStudentsSize and assigns it to _maxStudentsSize.

1. Initialize ClassRooms
Function initializeRooms returns an array of 3 ClassRoom objects with sizes 19, 20, and 34.

2. HolbertonCourse Class
Create a HolbertonCourse class with attributes name, length, and students, with getters and setters for each.

3. Currency Class
Create a Currency class with code and name, and a method displayFullCurrency that formats the output as name (code).

4. Pricing Class
Create a Pricing class with attributes amount and currency, and methods to display the full price and a static method to convert prices.

5. Building Class (Abstract)
Create an abstract class Building with sqft and enforce the implementation of evacuationWarningMessage in derived classes.

6. SkyHighBuilding Class
Extend the Building class to create a SkyHighBuilding class with an additional attribute floors and override the evacuationWarningMessage.

7. Airport Class
Create an Airport class with name and code, where the default string description returns the airport code.

8. HolbertonClass
Create a HolbertonClass that when cast to a number returns its size, and when cast to a string returns its location.

## Author
Tevin Mark Simiyu
GitHub: @marktevin
