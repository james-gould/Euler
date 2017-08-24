function RunProblem(id) {
  if(typeof id !== 'number') {
    console.log('Invalid Euler Problem ID.');
    return;
  }

  const problemById = require(`./ID/${id}.js`);
  problemById.Solve();
}

module.exports = {
  RunProblem,
}