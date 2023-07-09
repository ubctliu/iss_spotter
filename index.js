const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = (data) => {
  for (const obj of data) {
    let date = new Date(obj.risetime * 1000).toString();
    const duration = obj.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, data) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(data);
});

module.exports = { printPassTimes };