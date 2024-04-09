// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'ISC') {
    return 'https://opensource.org/license/isc-license-txt';
  }
  else if (license === 'MIT'){
    return 'https://opensource.org/licenses/MIT';
  }
  else if (license === 'IBM'){
    return 'https://opensource.org/licenses/IPL-1.0';
  }
  else if (license === 'Apache'){
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === 'Eclipse'){
    return 'https://opensource.org/licenses/EPL-1.0';
  }
  return 'no license for' + license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'ISC') {
    return 'Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.';
  }
  return 'no license for' + license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  licenseSection = renderLicenseSection(data.license)
  licenseLink = renderLicenseLink(data.license)
  licenseBadge = renderLicenseBadge(data.license)
  return `
# Title
${data.title}
${licenseBadge}
# Description
${data.description}
# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)
# Installation
${data.installation}
# Usage
${data.usage}
# Contribution
${data.contribution}
# Testing
${data.testing}
# License
${licenseSection}
${licenseBadge}
[License Link](${licenseLink})
# Questions
Feel free to reach out with any questions via [GitHub](https://github.com/${data.github}) or email ${data.email}
`;
}

module.exports = generateMarkdown;
