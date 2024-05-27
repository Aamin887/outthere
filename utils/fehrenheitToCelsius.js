const fehToCel = (temp) => {
  return (temp - 32) * (5 / 9).toFixed(2);
};

module.exports = fehToCel;
