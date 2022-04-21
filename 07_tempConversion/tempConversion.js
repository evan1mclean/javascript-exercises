const ftoc = function(temp) {
  let ctemp = (temp - 32) * (5/9);
  return Number(ctemp.toFixed(1));
};

const ctof = function(temp) {
  let ftemp = (temp * (9/5)) + 32;
  return Number(ftemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
