function youngjaeInfo(channel) {
  const endOfLine = require('os').EOL
  channel.send('Stage Name: Youngjae (영재)' + endOfLine +
  'Birth Name: Choi Young Jae (최영재)' + endOfLine +
  'Nationality: Korean' + endOfLine +
  'Position: Main Vocalist' + endOfLine +
  'Birthday: September 17, 1996' + endOfLine +
  'Zodiac Sign: Virgo' + endOfLine +
  'Height: 178 cm (5’10”)' + endOfLine +
  'Weight: 64 kg (141 lbs)' + endOfLine +
  'Blood Type: B' + endOfLine +
  'Specialties: Singing' + endOfLine +
  'Education: Seoul Korea Arts High School' + endOfLine +
  'Hobbies: Playing the piano' + endOfLine +
  'Favorite Musician: Elliot Yamin, Javier' + endOfLine +
  'Twitter: @GOTYJ_Ars_Vita' + endOfLine +
  'Instagram: @333cyj333' + endOfLine +
  'Soundcloud: ars333ars' + endOfLine, {files: ['./youngjae.jpg']})
}

module.exports = {youngjaeInfo}
