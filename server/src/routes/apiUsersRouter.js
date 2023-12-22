const express = require('express');
const { User, Associations, Chat } = require('../../db/models');

const apiUsersRouter = express.Router();

apiUsersRouter.route('/').get(async (req, res) => {
  try {
    const posts = await User.findAll({
      include: {
        model: User,
        as: 'Kurator',
      },
    });
    // console.log(posts[0].Kurator[0]);
    // console.log(posts[0].Kurator[0]);
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

apiUsersRouter.route('/search/:id').patch(async (req, res) => {
  console.log(req.params.id, '111111');
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }

    const updateUser = await user.update({ statusId: 2 });

    res.status(200).json(updateUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

apiUsersRouter.route('/mig').get(async (req, res) => {
  try {
    const userAndKurator = await User.findAll({
      include: {
        model: User,
        as: 'Migrant',
      },
    });
    // console.log(userAndKurator[0].Migrant[0],"1111111111");

    res.json(userAndKurator);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});
apiUsersRouter.route('/apr/:id').patch(async (req, res) => {
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
apiUsersRouter.route('/addmig/:id').patch(async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    console.log(req.body, 'Baaaack');

    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }

    const updateUser = await user.update({ statusId: 1 });
    console.log(updateUser, 'updateUSer');
    await Associations.create({
      kuratId: req.body.userId,
      migrId: Number(req.params.id),
    });
    const upUser = await User.findByPk(req.params.id, {
      include: { model: User, as: 'Migrant' },
    });
    console.log(upUser, 12323423432);
    res.status(200).json(upUser);
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
});
apiUsersRouter.route('/:id').delete(async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
apiUsersRouter.route('/chat').get(async (req, res) => {
  try {
    const message = await Chat.findAll({
      include: {
        model: User,
      },
    });
    res.json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});
apiUsersRouter.route('/send').post(async (req, res) => {
  try {
    const post = await Chat.create({
      ...req.body,
    });
    const postWithAuthor = await Chat.findByPk(post.id, {
      include: {
        model: User,
      },
    });
    res.status(201).json(postWithAuthor);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = apiUsersRouter;
