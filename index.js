const problems = require('./problems');

if(process.argv.length > 3) {
  throw new Error('Only a single problem ID can be requested. Format as: node index.js {ID of problem}');
  return;
}

let problemID = parseInt(process.argv[2]);

if(typeof problemID !== 'number' || problemID > 598) {
  throw new Error('Invalid ID');
  return;
}

problems.RunProblem(problemID);