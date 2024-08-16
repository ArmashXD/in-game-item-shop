const { createConnection } = require('typeorm');
const User = require('../entity/User');

const connectDatabase = async () => {
  try {
    await createConnection({

      type: 'postgres',
      host: 'localhost', 
      port: 5432, 
      username: 'postgres', 
      password: '12345', 
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