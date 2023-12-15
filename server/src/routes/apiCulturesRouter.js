const express = require('express');
const { Culture } = require('../../db/models');
// const verifyAccessToken = require('../middlewares/verifyAccessToken');
// const checkAuthor = require('../middlewares/checkAuthor');

const apiCulturesRouter = express.Router();

apiCulturesRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const cultures = await Culture.findAll();
      res.json(cultures);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
//   .post(verifyAccessToken, async (req, res) => {
//     try {
//       const post = await Comment.create({
//         ...req.body,
//         userId: res.locals.user.id,
//       });
//       const postWithAuthor = await Comment.findByPk(post.id, {
//         include: User,
//       });
//       res.status(201).json(postWithAuthor);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   });

// apiCommentsRouter
//   .route('/:id')
//   .delete(verifyAccessToken, checkAuthor, async (req, res) => {
//     try {
//       const post = await Comment.findByPk(req.params.id);
//       await post.destroy();
//       res.sendStatus(200);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   })
//   .patch(verifyAccessToken, checkAuthor, async (req, res) => {
//     try {
//       const post = await Comment.findByPk(req.params.id);
//       await post.update(req.body);
//       const postWithAuthor = await Comment.findByPk(post.id, {
//         include: User,
//       });
//       res.json(postWithAuthor);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   });

module.exports = apiCulturesRouter;
