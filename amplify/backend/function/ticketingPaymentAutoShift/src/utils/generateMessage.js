/**
 *
 * @param {String} name - Recipient's name
 * @param {String} date - Start date of the next wave
 * @param {String} currentWaveName - name of the current wave
 * @param {String} nextWaveName - name of the next wave
 * @param {String} ignoreDate - ignore date = start immediately
 *
 * @returns {String}
 */
const generateMessage = (
  name,
  date,
  currentWaveName,
  nextWaveName,
  ignoreDate,
) => {
  const didStart = new Date(date) < new Date();
  if (!didStart) {
    return `Hi ${name}, your wave ${currentWaveName} booking has been sold out. Next wave will be available soon!`;
  } else if (!didStart && ignoreDate) {
    return `Hi ${name}, your wave ${currentWaveName} booking has been sold out. You can book for the next wave ${nextWaveName} now from this link hhtps://example.com/nextwavebooking`;
  } else {
    return `Hi ${name}, your wave ${currentWaveName} booking has been sold out. You can book for the next wave ${nextWaveName} now from this link hhtps://example.com/nextwavebooking`;
  }
};

module.exports = {
  generateMessage,
};
