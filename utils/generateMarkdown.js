// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// Badge: https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return `[License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)`;
  } if (license === "GPL License") {
    return `[License: GPL v3](https://img.shields.io/badge/License-GPLv3-purple.svg)`;
  } if (license === "Apache License") {
    return `[License: Apache](https://img.shields.io/badge/License-Apache_2.0-purple.svg)`;
  } if (license === "Mozilla Public") {
    return `[License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-purple.svg)`;
  } if (license === "Eclipse Public") {
    return `[License: Eclipse 2.0](https://img.shields.io/badge/License--Eclipse-2.0-purple.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// licenses : https://opensource.org/licenses/category
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return '[License: MIT] https://opensource.org/licenses/MIT';
  } else if (license === "GPL License") {
    return '[License: GPL v3] https://opensource.org/licenses/GPL-3.0';
  } else if (license === "Apache License") {
    return '[License: Apache] https://opensource.org/licenses/Apache-2.0';
  } else if (license === "Mozilla Public") {
    return '[License: MPL 2.0] https://opensource.org/licenses/MPL-2.0';
  } else if (license === "Eclipse Public") {
    return '[License: Eclipse 2.0] https://opensource.org/licenses/EPL-2.0';
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
${data.description}

## Badge
${renderLicenseBadge(data.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)

## Installation
${data.installation}

## Usage 
${data.usage}

## License 
${renderLicenseLink(data.license)}

## Contributors 
${data.contributing}

## Tests 
${data.tests}

## Questions
If you have any questions please contact me at ${data.email}
Checkout my Github with my username --  ${data.github}

`;
}

module.exports = generateMarkdown;
