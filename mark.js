function markInfo(channel) {
  const endOfLine = require('os').EOL
  channel.send('Stage Name: Mark (마크)' + endOfLine +
  'Birth Name: Mark Yi En Tuan (段宜恩)' + endOfLine +
  'Korean Name: Dong Yi Eun (동의은)' + endOfLine +
  'Nationality: American (but of Taiwanese descent)' + endOfLine +
  'Position: Main Rapper, Lead Dancer, Sub-Vocalist, Visual' + endOfLine +
  'Birthday: September 4, 1993' + endOfLine +
  'Zodiac Sign: Virgo' + endOfLine +
  'Height: 175 cm (5’9″)' + endOfLine +
  'Weight: 59 kg (130 lbs)' + endOfLine +
  'Blood Type: A' + endOfLine +
  'Specialty: Martial arts tricking' + endOfLine +
  'Favorite Food: Hamburger, Meat' + endOfLine +
  'Education: Arcadia High School – 10th-grade certificate' + endOfLine +
  'Hobbies: Skateboarding and snowboarding' + endOfLine +
  'Favorite Artists: Chris Brown, Drake, ASAP Rocky, Tyga' + endOfLine +
  'Instagram: @mark_tuan' + endOfLine +
  'Twitter: @mtuan93' + endOfLine, {files: ['./mark.jpg']})
}

module.exports = {markInfo}
