const inquirer = require('inquirer');
const fs = require('fs');
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

inquirer
	.prompt([
		{
			message: 'Whats the project title?',
			type: 'input',
			name: 'pjTitle',
		},
		{
			message: 'Please give a detailed description of the project',
			type: 'input',
			name: 'pjDesc',
		},
		{
			message: 'Do you have any installation instructions?',
			type: 'input',
			name: 'pjInst',
		},
		{
			message: 'Please describe the usage of your application',
			type: 'input',
			name: 'pjUsage',
		},
		{
			message: 'Please add any license info if applicable?',
			type: 'input',
			name: 'pjLicense',
		},
		{
			message: 'Please list any contributors if applicable',
			type: 'input',
			name: 'pjPartners',
		},
		{
			message: 'Please list any tests that are provided with the application',
			type: 'input',
			name: 'pjTest',
		},
		{
			message: 'What is your Github username?',
			type: 'input',
			name: 'pjGit',
		},
		{
			message: 'What is your Email?',
			type: 'input',
			name: 'pjEmail',
		},
	])
	.then((answers) => {
		const generateMD = () =>
			`# ${answers.pjTitle}
    
# Table of Contents
    
1. [Description](#description)
2. [Installation](#installation)
3. [Application Usage](#usage)
4. [License](#license)
5. [Contributors](#contributors)
6. [Tests](#tests)
7. [Contact Me](#contact)
    
## Description <a id = 'description'></a>
    
    ${answers.pjDesc}
    
## Installation instructions <a id = 'installation'></a>
    
    ${answers.pjInst}
    
## Application Usage <a id = 'usage'></a>
    
    ${answers.pjUsage}
    
## License Information <a id = 'license'></a>
    
    ${answers.pjLicense}
    
## Contributors <a id = 'contributors'></a>
    
    ${answers.pjPartners}
    
## Tests <a id = 'tests'></a>
    
    ${answers.pjTest}
    
## Contact-Me <a id = "contact"></a>
    
You can find my GitHub profile here:[${answers.pjGit}](https://github.com/${answers.pjGit})
Or send me an email at ${answers.pjEmail}`;
		const mdContent = generateMD(answers);

		fs.writeFile('README.md', mdContent, (err) =>
			err ? console.log(err) : console.log('Successfully created README.md!')
		);
	});
