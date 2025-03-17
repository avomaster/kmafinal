const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "#Sc@rab2021!",
    database: "contact",
});
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to MySQL database");
});
app.get("/", (req, res) => {
    res.send("Welcome to the Ingenuity API!");
});
app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "Please provide name, email, and message." });
    }
    db.query(
        "INSERT INTO responses (name, email, message) VALUES (?, ?, ?)",
        [name, email, message],
        (err, results) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ success: false, message: "Database error" });
            }
            console.log("Rows affected:", results.affectedRows);
            res.json({ success: true, message: "Form submitted successfully" });
        }
    );
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
