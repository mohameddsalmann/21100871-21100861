const app = require("./app");
const sequelize = require("./db");  // Import sequelize instance from db.js

const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`User service running at http://localhost:${PORT}`);

    // Synchronize the models with the database
    try {
        await sequelize.sync();  // This will sync the models with the database
        console.log("Database synchronized");
    } catch (error) {
        console.error("Error synchronizing database:", error);
    }
});
