require("dotenv").config();
const bcrypt = require("bcrypt");

const connectDB = require("../config/db");
const User = require("../models/User");

const initDB = async () => {
    try {
        await connectDB();

        await User.deleteMany({});

        const sampleUsers = [
            {
                username: "veer",
                email: "veer@gmail.com",
                password: await bcrypt.hash("123456", 10),
            },
            {
                username: "virat",
                email: "virat@gmail.com",
                password: await bcrypt.hash("abcdef", 10),
            },
            {
                username: "jaddu",
                email: "jaddu@gmail.com",
                password: await bcrypt.hash("password123", 10),
            }
        ];

        await User.insertMany(sampleUsers);

        console.log("Database initialized successfully.");

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

initDB();