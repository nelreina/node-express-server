require('dotenv').config();
const http = require('http');
const express = require('@nelreina/node-express');
const log4js = require('@nelreina/node-log4js');

const publicRoutes = require('./routes/public');
const privateRoutes = require('./routes/private');

const logger = log4js('app');
const PORT = process.env['PORT'] || 5000;

const app = express();
publicRoutes(app, logger);
privateRoutes(app, logger);
const server = http.createServer(app);
server.listen(PORT, () => logger.info(`API is running on port ${PORT}`));
