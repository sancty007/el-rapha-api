import app from './app';
import config from './config';
import { logger } from './lib/winston';

const PORT = config.PORT || 3000;

const server = app.listen(PORT, () => {
  // Établir la connexion à la base de données
  logger.info(`🚀 Server is running on port ${PORT}`);
  logger.info(`🌐 API available at http://localhost:${PORT}`);
  logger.info(`🌱 Environment: ${config.NODE_ENV}`);
});

// Handle promesse rejection in our application

process.on('unhandledRejection', (err: Error) => {
  logger.info('UNCAUGHT REJECTION !!');
  logger.info(err.name, err.message);
  server.close(() => {
    logger.info('server are closed');
    process.exit(1);
  });
});

// Handle exceptions

process.on('uncaughtException', (err: Error) => {
  logger.info('UNCAUGHT EXCEPTION !!');
  logger.info(err.name, err.message);
  server.close(() => {
    logger.info('server are closed');
    process.exit(1);
  });
});
