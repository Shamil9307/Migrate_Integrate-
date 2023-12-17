const express = require('express');
const { User } = require('../../db/models');

const apiUsersRouter = express.Router();

apiUsersRouter.route('/').get(async (req, res) => {
  try {
    const posts = await User.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

apiUsersRouter.route('/:id').patch(async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }

    const updateUser = await user.update({ statusId: 1 });

    res.status(200).json(updateUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});
apiUsersRouter.route('/den/:id').patch(async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }

    const updateUser = await user.update({ statusId: 3 });

    res.status(200).json(updateUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});
apiUsersRouter.route('/edit/:id').patch(async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    const updateUser = await User.findByPk(user.id);
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }

})

module.exports = apiUsersRouter;
