const fs = require('fs');
const path = require('path');
const basePath = '/api/public';

module.exports = (app, logger = console) => {
  logger.info(`=== public routes ===`);
  fs.readdirSync(__dirname)
    .filter(function (file) {
      return file.indexOf('.') !== 0 && file !== 'index.js';
    })
    .forEach(function (file) {
      const routepath = file.replace('.js', '');
      logger.trace(`•   ${basePath}/${routepath}`);
      app.use(`${basePath}/${routepath}`, require(path.join(__dirname, file)));
    });
  app.get(basePath, async (req, res) => {
    res.send({ message: `${basePath} routes` });
  });
};