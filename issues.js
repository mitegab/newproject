const faker = require('faker');
const fs = require('fs');

function getRandomDate(startDate, endDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  return new Date(start + Math.random() * (end - start));
}

function generateIssues(numIssues) {
  const startDate = '2023-01-01';
  const endDate = '2023-12-31';
  const issues = [];

  for (let i = 0; i < numIssues; i++) {
    const title = faker.lorem.words(3);
    const description = faker.lorem.sentence();
    const date = getRandomDate(startDate, endDate);

    issues.push({
      title,
      description,
      date,
    });
  }

  return issues;
}

const numIssues = 200;
const issues = generateIssues(numIssues);

fs.writeFile('issues.json', JSON.stringify(issues, null, 2), (err) => {
  if (err) throw err;
  console.log('Issues data has been saved to issues.json');
});

