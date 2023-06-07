const db = require('../models/dellModels');

const dellController = {};

dellController.getCustomers = (req, res, next) => {
  // add try and catch
  //   const query = 'SELECT * FROM customers limit 10';

  const query = res.locals.query;
  //   console.log('This is dell controller ', query);
  db.query(query, (err, results) => {
    if (err) {
      return next(err);
    }
    res.locals.customers = results.rows;
    return next();
  });
};

module.exports = dellController;
