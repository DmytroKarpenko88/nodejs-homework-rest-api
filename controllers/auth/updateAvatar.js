const path = require('path');
const fs = require('fs/promises');
const { User } = require('../../models/user');
// const Jimp = require('jimp');

const avatarsDir = path.join(__dirname, '../../', 'temp', 'avatars');

// Jimp.read('avatar.jpg', (err, avatar) => {
//   console.log(err);
//   if (err) throw err;

//   avatar.resize(250, 250).quality(60).grayscale().write('lena-small-bw.jpg');
// });

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const fileName = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarsDir, fileName);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join('avatars', fileName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
