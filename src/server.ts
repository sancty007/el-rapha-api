import app from './app';
import config from './config';

const PORT = config.PORT || 3000;

const server = app.listen(PORT, async () => {
  try {
    // Établir la connexion à la base de données
    console.info(`🚀 Server is running on port ${PORT}`);
    console.info(`🌐 API available at http://localhost:${PORT}`);
    console.info(`🌱 Environment: ${config.NODE_ENV}`);
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
});

// Handle promesse rejection in our application

process.on('unhandledRejection', (err: Error) => {
  console.log('UNCAUGHT REJECTION !!');
  console.log(err.name, err.message);
  server.close(() => {
    console.log('server are closed');
    process.exit(1);
  });
});

// Handle exceptions

process.on('uncaughtException', (err: Error) => {
  console.log('UNCAUGHT EXCEPTION !!');
  console.log(err.name, err.message);
  server.close(() => {
    console.log('server are closed');
    process.exit(1);
  });
});
