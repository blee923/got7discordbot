function jacksonInfo(channel) {
  const endOfLine = require('os').EOL
  channel.send('Stage Name: Jackson (잭슨)' + endOfLine +
  'English Name: Jackson Wang' + endOfLine +
  'Birth Name: Wang Jia Er / Wang Ka Yee (王嘉爾)' + endOfLine +
  'Nationality: Chinese (from Hong Kong' + endOfLine +
  'Position: Lead Rapper, Lead Dancer, Sub-Vocalist, Face of The Group' + endOfLine +
  'Birthday: March 28, 1994' + endOfLine +
  'Zodiac Sign: Aries' + endOfLine +
  'Height: 174 cm (5’9″)' + endOfLine +
  'Weight: 63 kg (139 lbs)' + endOfLine +
  'Blood Type: O' + endOfLine +
  'Specialties: Fencing' + endOfLine +
  'Education: American International School in Hong Kong (completed up to the 11th grade)' + endOfLine +
  'Favorite Artist: Dr. Dre, 50cent, Lloyd Banks' + endOfLine +
  'Instagram: @jacksonwang852g7' + endOfLine +
  'Twitter: @jacksonwang852' + endOfLine, {files: ['./jackson.jpg']})
}

module.exports = {jacksonInfo}
