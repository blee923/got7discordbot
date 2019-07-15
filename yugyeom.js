function yugyeomInfo(channel) {
  const endOfLine = require('os').EOL
  channel.send('Stage Name: Yugyeom (유겸)' + endOfLine +
  'Birth Name: Kim Yu Gyeom (김유겸)' + endOfLine +
  'Nationality: Korean' + endOfLine +
  'Position: Main Dancer, Lead Vocalist, Rapper, Maknae' + endOfLine +
  'Birthday: November 17, 1997' + endOfLine +
  'Zodiac Sign: Scorpio' + endOfLine +
  'Height: 182 cm (6’0″) (GOT7 TMI Lab part one)' + endOfLine +
  'Weight: 64 kg (141 lbs)' + endOfLine +
  'Blood Type: A' + endOfLine +
  'Specialties: Street dancing (krumping, house dance, popping)' + endOfLine +
  'Hobbies: Playing the piano' + endOfLine +
  'Favorite Food: Samgyupsal, Bulgogi, Chicken, Kimbab' + endOfLine +
  'Favorite Artist: Chris Brown' + endOfLine +
  'Instagram: @yu_gyeom' + endOfLine +
  'Twitter: @real_Kimyugyeom' + endOfLine +
  'Soundcloud: YUGYEOM' + endOfLine, {files: ['./yugyeom.jpg']})
}

module.exports = {yugyeomInfo}
