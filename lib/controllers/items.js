const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');
const Item = require('../models/Item');

module.exports = Router()
  // TO DO - implement items CRUD
  .get('/', authenticate, authorize, async (req, res, next) => {
    try {
      const data = await Item.getAll(req.user.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
