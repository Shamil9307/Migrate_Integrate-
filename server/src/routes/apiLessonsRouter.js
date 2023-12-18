const express = require('express');
const { Lesson } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const apiLessonsRouter = express.Router();

apiLessonsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const lessons = await Lesson.findAll();
      res.json(lessons);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const lesson = await Lesson.create({
        ...req.body,
      });
      res.status(201).json(lesson);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiLessonsRouter
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const post = await Lesson.findByPk(req.params.id);
      await post.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })

  .patch(async (req, res) => {
    try {
      const lesson = await Lesson.findByPk(req.params.id);
      await lesson.update(req.body);
      const lessonId = await Lesson.findByPk(lesson.id);
      res.json(lessonId);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiLessonsRouter;
