const express = require('express');
const { Novost } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
// const checkAuthor = require('../middlewares/checkAuthor');

const apiNovostiRouter = express.Router();

apiNovostiRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const novosti = await Novost.findAll();
      res.json(novosti);
      
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post( async (req, res) => {
    try {
      const novost = await Novost.create({
        ...req.body
      });
      res.status(201).json(novost);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

  apiNovostiRouter
  .route('/:id')
  .delete( async (req, res) => {
    try {
      const novost = await Novost.findByPk(req.params.id);
      await novost.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch( async (req, res) => {
    try {
      const novost = await Novost.findByPk(req.params.id);
      await novost.update(req.body);
      const updateNovost = await Novost.findByPk(novost.id);
      res.json(updateNovost);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiNovostiRouter;
