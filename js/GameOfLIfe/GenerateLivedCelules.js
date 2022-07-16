const GenerateLivedCelules = (habitat) => {
  habitat[0][1] = 0;
  habitat[1][2] = 0;
  habitat[2][0] = 0;
  habitat[2][1] = 0;
  habitat[2][2] = 0;
  return habitat;
};

module.exports = GenerateLivedCelules;
