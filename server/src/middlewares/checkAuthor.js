require('dotenv').config();
const { Comment } = require('../../db/models');

async function checkAuthor(req, res, next) {
  try {
    const { id } = req.params;
    const targetComment = await Comment.findByPk(id);
    if (targetComment.userId !== res.locals.user.id) {
      return res
        .status(403)
        .send('You are not authorized to perform this action');
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(403).send('You are not authorized to perform this action');
  }
}

module.exports = checkAuthor;
