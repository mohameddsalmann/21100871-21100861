const { Sequelize } = require("sequelize");

// Create a new Sequelize instance with database configuration
const sequelize = new Sequelize({
    dialect: 'postgres', // Type of database
    host: process.env.DATABASE_HOST || 'localhost', // Database host
    database: process.env.DATABASE_NAME || 'userdb', // Database name
    username: process.env.DATABASE_USER || 'postgres', // Database username
    password: process.env.DATABASE_PASSWORD || 'admin', // Database password
});

// Export sequelize instance to be used in other files
module.exports = sequelize;
