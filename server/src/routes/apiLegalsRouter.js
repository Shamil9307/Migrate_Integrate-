const express = require('express');
const { Legal } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
// const checkAuthor = require('../middlewares/checkAuthor');

const apiLegalsRouter = express.Router();

apiLegalsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const legals = await Legal.findAll();
      res.json(legals);
      
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post( async (req, res) => {
    try {
      const legal = await Legal.create({
        ...req.body
      });
      res.status(201).json(legal);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

  apiLegalsRouter
  .route('/:id')
  .delete( async (req, res) => {
    try {
      const legal = await Legal.findByPk(req.params.id);
      await legal.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch( async (req, res) => {
    try {
      const legal = await Legal.findByPk(req.params.id);
      await legal.update(req.body);
      const updateLegal = await Legal.findByPk(legal.id);
      res.json(updateLegal);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiLegalsRouter;
