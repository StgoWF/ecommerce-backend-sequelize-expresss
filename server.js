const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes);

// Sync Sequelize models to the database and then turn on the server
sequelize.sync({ force: false }).then(() => {
  console.log('Sequelize models synced to the database');
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
}).catch(err => {
  console.error('Unable to sync Sequelize models to the database:', err);
});
