function jbInfo(channel) {
  const endOfLine = require('os').EOL
  channel.send('Stage Name: JB (제이비)' + endOfLine +
  'Birth Name: Im Jae Bum (임재범)' + endOfLine +
  'Nationality: Korean' + endOfLine +
  'Position: Leader, Main Vocalist, Lead Dancer, Center' + endOfLine +
  'Birthday: January 6, 1994' + endOfLine +
  'Zodiac Sign: Capricorn' + endOfLine +
  'Height: 179 cm (5’10” 1/2)' + endOfLine +
  'Weight: 66 kg (139 lbs)' + endOfLine +
  'Blood Type: A' + endOfLine +
  'Specialties: B-Boying' + endOfLine +
  'Education: Geonguk University – Film major' + endOfLine +
  'Hobbies: Watching movies, taking pictures, traveling, eating at restaurants' + endOfLine +
  'Favorite Artists: Michael Jackson, India Arie & Javier' + endOfLine +
  'Instagram: @prdsdef' + endOfLine +
  'Soundcloud: Def.' + endOfLine, {files: ["./jb.jpg"]})
}

module.exports = {jbInfo}
