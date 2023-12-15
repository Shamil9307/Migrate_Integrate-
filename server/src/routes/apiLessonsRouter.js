const express = require('express');
const { Lesson } = require('../../db/models');

const apiLessonsRouter = express.Router();

apiLessonsRouter.route('/').get(async (req, res) => {
  try {
    const lessons = await Lesson.findAll();
    res.json(lessons);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiLessonsRouter;
