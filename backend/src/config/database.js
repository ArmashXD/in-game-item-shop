const { createConnection } = require('typeorm');
const User = require('../entity/User');

const connectDatabase = async () => {
  try {
    await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'user_db',
      entities: [User],
      synchronize: true,
      logging: false,
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = { connectDatabase };