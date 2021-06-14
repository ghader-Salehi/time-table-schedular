const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./app.js');

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected.'))
  .catch(() => console.log('Something went wrong connecting to database'));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log('Listening on port', port);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection Shutting down ...');
  console.log('Error:', err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception Shutting down ...');
  console.log('Error:', err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
