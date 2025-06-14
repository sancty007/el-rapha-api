import app from './app';
import config from './config';

const PORT = config.PORT || 3000;

const server = app.listen(PORT, async () => {
  try {
    console.info(`🚀 Server is running on port ${PORT}`);
    console.info(`🌐 API available at http://localhost:${PORT}`);
    console.info(`🌱 Environment: ${config.NODE_ENV}`);
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
});

process.on('unhandledRejection', (err: Error) => {
  console.log('UNCAUGHT REJECTION !!');
  console.log(err.name, err.message);
  server.close(() => {
    console.log('server are closed');
    process.exit(1);
  });
});

process.on('uncaughtException', (err: Error) => {
  console.log('UNCAUGHT EXCEPTION !!');
  console.log(err.name, err.message);
  server.close(() => {
    console.log('server are closed');
    process.exit(1);
  });
});
