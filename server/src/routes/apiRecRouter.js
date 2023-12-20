const express = require('express');
const { Recomendation } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const checkAuthor = require('../middlewares/checkAuthor');

const apiRecRouter = express.Router();

apiRecRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await Recomendation.findAll();
      res.json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const post = await Recomendation.create({
        ...req.body,
        userId: res.locals.user.id,
      });
      const postWithAuthor = await Recomendation.findByPk(post.id);
      res.status(201).json(postWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiRecRouter
  .route('/:id')
  .delete(verifyAccessToken, async (req, res) => {
    try {
      const post = await Recomendation.findByPk(req.params.id);
      await post.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch(verifyAccessToken, async (req, res) => {
    try {
      const post = await Recomendation.findByPk(req.params.id);
      await post.update(req.body);
      const postWithAuthor = await Recomendation.findByPk(post.id);
      res.json(postWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiRecRouter;
