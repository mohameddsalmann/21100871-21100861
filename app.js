const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const User = require("./models/user");

const app = express();
app.use(bodyParser.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Sign-up Route
app.post("/auth/signup", async (req, res) => {
    const { email, password } = req.body;

    // Simple validation to ensure email and password are provided
    if (!email || !password) {
        return res.status(400).send({ error: "Email and password are required" });
    }

    try {
        // Create a new user in the database
        const user = await User.create({ email, password });
        
        // Send success response
        res.status(201).send({ message: "User signed up successfully", user });
    } catch (error) {
        // Handle any errors (e.g., duplicate email)
        console.error(error);
        res.status(500).send({ error: "Failed to sign up user" });
    }
});

module.exports = app;
