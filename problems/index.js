function RunProblem(id) {
  const problemById = require(`./ID/${id}.js`);

  console.log(problemById.Title);

  problemById.Solve();
}

module.exports = {
  RunProblem,
}