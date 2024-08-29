import { Database } from './types';
import mongoose from 'mongoose';

const database: Database = {
  // Database connection URL
  url: environment.databaseUrl,

  // Database name
  name: environment.databaseName,

  // Database options
  options: {
    // Database connection timeout
    timeout: 30000,
  },
};

// Connect to database
mongoose.connect(database.url, database.options);

// Define database models
const gameModel = mongoose.model('Game', {
  name: String,
  description: String,
  image: String,
});

const userModel = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
});

export { gameModel, userModel };
