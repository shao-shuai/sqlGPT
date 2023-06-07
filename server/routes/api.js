const express = require('express');

const router = express.Router();

const dellController = require('../controllers/dellControllers');
const aiController = require('../controllers/aiController');

router.get('/', dellController.getCustomers, (req, res) => {
  res.status(200).json(res.locals.customers);
});

router.post(
  '/query',
  aiController.promptReceiver,
  dellController.getCustomers,
  (req, res) => {
    res.status(200).json(res.locals.customers);
  }
);

module.exports = router;
