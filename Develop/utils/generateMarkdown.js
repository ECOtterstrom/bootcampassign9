function generateMarkdown(data) {
  return `
# ${data.title}

![badge](https://img.shields.io/badge/Language-${data.badge}-brightgreen)

## Description
${data.description}

## Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions please contact me at ${data.email},
or view my repo at [my Github repo](https://github.com/${data.username}/${data.title}).
`;
}

module.exports = generateMarkdown;
