const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = 7000;

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect("mongodb://localhost:27017/formDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to MongoDB");
}).catch(err => {
    console.error("Database connection error:", err);
});

// Define schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html")); // Ensure 'index.html' exists in the 'public' folder
});

app.post("/post", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        console.log("User saved:", user);
        res.send("Form submitted successfully");
    } catch (err) {
        console.error("Error saving user:", err);
        res.status(500).send("An error occurred while submitting the form");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
