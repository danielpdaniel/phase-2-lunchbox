# Our Lil' Picnic Basket

Our Lil' Picnic Basket is a Single Page React App for sharing fond memories about food with each other. I was inspired by the many recommendations of "you've got to try this!!" I've gotten from others upon them learning I haven't eaten their favorite food before. I think people love to share their favorite foods with each other and I hope this can help fascilitate that. Even if you don't have a food to submit, feel free to check out the existing submissions on the home page, though fair warning! They might just make you hungry...

The site is currently live [here](https://incandescent-toffee-ab615c.netlify.app/)!

## Installation

If you wish to run Our Lil' Picnic Bakset locally, Fork and clone the app from Github and (with npm installed) use terminal to run
```
npm install
npm start
``` 
in the project directory to install the dependencies listed in the package.json file and start the app in your local environment. The data for the project can be found [here](https://github.com/danielpdaniel/phase-2-lunchbox-data) if you would like to also run json-server on your local environment, though it would require you to update the fetch requests in the project files to the local port you choose to run the server on rather than its current [render hosted api](https://phase-2-lunchbox-data.onrender.com/foods)

## Usage

Upon entering Our Lil' Picnic Basket, visitors are invited to peruse the various food cards rendered to the home page. Each card represents a user submitted food that visitors may learn more about by clicking the "Food Story" button underneath the Food's name. Using the navigation links in the header, visitors can also check out the app's "Add Food", "All Foods", and "About" pages. The "Add Food" page allows visitors to submit their own food to be added to the site through state controlled form inputs. The "All Foods" page provides a list of all the foods that have been submitted so far in a handy alphabetized list. Lastly, the "About" page offers visitors a bit of info about the project as well as my goals for the app. 

Feel free to check out the site and even add your own foods over at [Our Lil Picnic's Add Food Page](https://incandescent-toffee-ab615c.netlify.app/newfood)!

## Sources and Contributions

The site uses [json-server](https://www.npmjs.com/package/json-server) and [Render](https://render.com/) to host its backend data, with its front end hosted on [Netlify](https://www.netlify.com/).

This app was made for Flatiron School's Software Engineering Flex Program Phase 2. I've learned a lot this phase! Thank you!!