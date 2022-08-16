const express = require("express");

const app = express();

// app.get(express.json());

app.get("/hello", (req, res) => {
    res.send("Ha");
});

app.listen(3000, () => {
    console.log("ta rodando");
});
