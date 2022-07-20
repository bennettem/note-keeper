const express = require ("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

const api = require("./routes/api/api");
const html = require("./routes/html/html");

app.use("/api", api);
app.use("/", html);

app.use(express.json());
app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`API server running on ${PORT}!`);
});

