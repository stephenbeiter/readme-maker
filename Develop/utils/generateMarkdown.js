// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.badge}
## Description
${data.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
This project is covered under the ${data.license} license.
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
GitHub: [github.com/${data.github}](http://github.com/${data.github})  
Email: [${data.email}](mailto:${data.email})
## Created by
### ${data.name}
`;
}

module.exports = generateMarkdown;
