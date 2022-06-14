/* var commandLineArgs = process.argv;
console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
/* console.log(profileDataArgs); 

const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs) */

const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name,github), err => {
    // if(err) throw Error(err);

    // console.log('Portfolio complete! Check out index.html to see the output!');
// });
inquirer
    .prompt ([ {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
    .then(answers => console.log(answers));