const GenerateLivedCelules = (Habitat) => {
  habitat[0][1] = 0;
  habitat[1][3] = 0;
  habitat[2][0] = 0;
  habitat[2][1] = 0;
  habitat[2][2] = 0;
  return Habitat;
};

module.exports = GenerateLivedCelules;
