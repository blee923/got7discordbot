function jinyoungInfo(channel) {
  const endOfLine = require('os').EOL
  channel.send('Stage Name: Jinyoung (Formerly known as Jr.)(진영)' + endOfLine +
  'Birth Name: Park Jin Young (박진영)' + endOfLine +
  'Nationality: Korean' + endOfLine +
  'Position: Lead Vocalist, Lead Dancer, Rapper, Visual, Center, Face of The Group' + endOfLine +
  'Birthday: September 22, 1994' + endOfLine +
  'Zodiac Sign: Virgo' + endOfLine +
  'Height: 178 cm (5’10”)' + endOfLine +
  'Weight: 63 kg (139 lbs)' + endOfLine +
  'Blood Type: O' + endOfLine +
  'Specialties: Dancing, Choreography' + endOfLine +
  'Education: Kyunggi High School – Graduated' + endOfLine +
  'Favorite Musicians: Justin Timberlake' + endOfLine +
  'Instagram: @jinyoung_0922jy' + endOfLine, {files: ['./jinyoung.jpg']})
}

module.exports = {jinyoungInfo}
