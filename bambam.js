function bambamInfo(channel) {
  const endOfLine = require('os').EOL
  channel.send('Stage Name: BamBam (뱀뱀)' + endOfLine +
  'Birth Name: Kunpimook Bhuwakul Bambam (กันต์พิมุกต์ ภูวกุล)' + endOfLine +
  'Nationality: Thai' + endOfLine +
  'Position: Lead Rapper, Lead Dancer, Sub-Vocalist' + endOfLine +
  'Birthday: May 2, 1997' + endOfLine +
  'Zodiac Sign: Taurus' + endOfLine +
  'Height: 178 cm (5’10″)' + endOfLine +
  'Weight: 60 kg (132 lbs)' + endOfLine +
  'Blood Type: B' + endOfLine +
  'Specialties: Rapping in Thai, dancing on girl bands songs' + endOfLine +
  'Hobbies: Listening to music' + endOfLine +
  'Favorite Food: Cheeseburger, Ddom yang kkoong' + endOfLine +
  'Favorite Artist: G-Dragon' + endOfLine +
  'Instagram: @bambam1a' + endOfLine +
  'Twitter: @bambam1a' + endOfLine, {files: ['./bambam.jpg']})
}

module.exports = {bambamInfo}
