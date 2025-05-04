const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

const keys = require("./key"); // <<--- import keys จาก key.js

app.use(cors());
app.use(bodyParser.json());

// GET API
app.get("/api/key", (req, res) => {
    delete require.cache[require.resolve("./key")]; // 🔥 clear cache
    const keys = require("./key");
    res.json(keys);

});


// POST API
app.post("/api/data", (req, res) => {
    const data = req.body;
    console.log("Data received:", data);
    res.json({ status: "received", data });
});

app.listen(port, () => {
    console.log("Data received:", keys);

    console.log(`🚀 Server running at http://localhost:${port}`);
});
