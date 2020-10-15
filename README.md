# A simple counter-App using [React.js](https://reactjs.org)

**This tiny application is like adding,removing,deleting, resetting products which reflects in the total number of products into our shopping cart.**
**This is a very basic app but useful to understand the React Components, states, Data Flow, parent to child etc. .**

**Do the following to run in your local machine**

## Scripts

Install node modules

#### `npm install`

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm run cy:run`

Runs the E2E tests using Cypress.
If Cypress is not installed whith the `npm install` command use the command `npm install cypress --save-dev`.

## Challenge 1. Setup and test the application

1. Identify and document the main functionalities and tests to be implemented.

...**Answer:** There is a counter on the navbar, which shows how many counters are more than 0. There is a counter reset button, which will make all present counters to Zero (original state) and a page reset button, which will return all 4 counters. This last button is disabled when there is at least one counter, the former button is disabled when there are no counters. 
The counters will increment and decrement based on the respective button that is pressed. Each counter has their own increment and decrement buttons.

2. Use any javascript end2end test framework to write tests on the application.

...**Answer:** I chose Cypress as I'm familiar with it and like to use it. The tests are implemented to check pretty much all the possible options with the exception of the disabled state for buttons, since the only way to check for this would be to verify if the elements with a combination of "data-cy" name and disabled exist. 

3. (Bonus) Additionally setup a test runner such as Jest and setup component testing with Enzyme or similar framework for the existing React components from the 

...**Answer:** I never used Jest before since most of the tests I implemented were either pure back end (unit & integration tests) or E2E tests, such as the tests I did on Cypress. After checking a few resources online it seems I won't become proficient at it in a day, but maybe in a week. These two guides, written by the same person, seemed like a good starting point: 
 ..* [Jest & Enzyme I](https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675);
 ..* [Jest & Enzyme II](https://codeburst.io/testing-react-events-with-jest-and-enzyme-ii-46fbe4b8b589);


## Challenge 2. QA strategy

Answer the following questions with as much detail as you can:

1. Which processes would you use in the company to ensure good testing of the software stack (i.e. frontend, backend services and DB)?

...**Answer:** The first approach is to do manual testing, always taking the prespective of the user. This allows the QA to get to know the app. Secondly is to work along with Costumer Support and Development teams to understand what are the critical paths of the app. These are the features that users complain the most and the basic functionality of the application. On any release, they have to be working. With those we can setup regression tests, which we have to run (and pass) before every deploy to production.
The documentation done on the previous steps should allow anyone with little knowledge of the app to follow the instructions and perform the tests. 
Now we should have a baseline for quality and a process, it is time to introduce E2E automation. Regression tests are always the best candidates to start because we have to repeat them often and they involve features that don't change often. Changes to the feature force changes to the test (frequently).
Specific automation tools will depend on the software tested, the tech stack it uses and the objectives of the tests. FE focused testing with E2E capabilities can be done on Cypress, selenium or similar apps. Should be included in CI if its implemented. 
If an API needs to be tested we can use postman or jetbrains with Rider. We could even develop our own tools if the functionality and costs justify it. 


2. Which stakeholders and how would you get them involved along the processes described?

...**Answer:** Depends on the level of involvement and the people available. Developers should be aware of the tests being done. Project Managers should help setup requirements for developers and QA and also check the app on staging. 
Designers, UX engineers can help with setting up requirements as well. 
Overall it depends a lot on the way the team is already working and who is on it. In general there should be sprint reports available for everyone to check, messages with questions and calls if necessary.


3. Along with the processes which checkpoints, meetings, ceremonies would set up? Specify any details around cadence of the meetings, involvement and which topics or responsibilities are carried out. If there is any crossover with additional processes or activities in the company, describe when and how it happens.

...**Answer:** I'm not a fan of over cluttered schedules. Weekly sprint meeting with the development/product team and bi-weekly check point with the stakeholders. We can also schedule a bi-weekly call with costumer support, but I prefer to stay updated in real time by slack (or similar apps).
Overall is depends a lot on the company's culture and the way it currently works. The idea is to improve the application and make the development cycle smoother, not to raze and start new.

4. How would you ensure stability of software releases in an organization with heavy continuous development of new features. Describe how you would prioritize tests and QA in general in such a setup.

...**Answer:** No releases without proper regression testing. Untested features shouldn't be released. If we have to choose a subset of tests on a release for some reason, the focus should be on the new features or on the current features where fixes were applied. 
Every development ticket should be tested before being considered for release.
Tests, in any case, should be a mix of manual and automated. 

5. Describe how the processes you described earlier would be affected and relate to quick code release models.

...**Answer:** With proper planning and time to test, it shouldn't be affected much. When the majority of test cases is automated (70% coverage) the time it takes to test an application goes down considerably. QA should always be taken into consideration when planning a release. 
A while ago I made a diagram of the QA process (its the QA Process.jpg). To make the process quicker we can eliminate some steps, specifically have the product team less involved.