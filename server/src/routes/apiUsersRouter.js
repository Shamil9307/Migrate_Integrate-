const express = require('express');
const { Comment, User } = require('../../db/models');

const apiUsersRouter = express.Router();

apiUsersRouter.route('/').get(async (req, res) => {
  try {
    const users = await User.findAll({
      include: Comment,
      order: [['createdAt', 'DESC']],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

apiUsersRouter.route('/:userId/comments').get(async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { userId: req.params.userId },
      include: User,
    });
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiUsersRouter;
