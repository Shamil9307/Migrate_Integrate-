const express = require('express');
const { Culture } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
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
  .post( async (req, res) => {
    try {
      const culture = await Culture.create({
        ...req.body
      });
      res.status(201).json(culture);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiCulturesRouter
  .route('/:id')
  .delete( async (req, res) => {
    try {
      const culture = await Culture.findByPk(req.params.id);
      await culture.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch( async (req, res) => {
    try {
      const culture = await Culture.findByPk(req.params.id);
      await culture.update(req.body);
      const updateCulture = await Culture.findByPk(culture.id);
      res.json(updateCulture);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiCulturesRouter;
