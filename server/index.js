import express from 'express';
import reload from 'reload';
import logger from './utils/logger';
import { default as swaggerMiddlewares } from './middlewares/Swagger';
import { default as weatherMiddlewares } from './middlewares/Weather';
import { default as healthCheckMiddlewares } from './middlewares/HealthCheck';
import { default as publicFileMiddlewares } from './middlewares/PublicFiles';
import { default as clientMiddlewares } from './middlewares/Client';

const PORT = process.env.PORT || 3000;
const app = express();
const apiRouter = express.Router();

// Add Development middlewares
if (process.env.NODE_ENV === 'development') {
  reload(app);
  swaggerMiddlewares(apiRouter);
}

// Add API middlewares
weatherMiddlewares(apiRouter);
healthCheckMiddlewares(apiRouter);
app.use('/api', apiRouter);

// Add Client middlewares
publicFileMiddlewares(app);
clientMiddlewares(app);

// Start App
app.listen(PORT, err => {
  if (err) logger.error(err.message);
  logger.appStarted(PORT);
});
