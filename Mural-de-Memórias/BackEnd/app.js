const express = require("express");
const cors = require("cors");
const memoryRouter = require("./routes/router.js");
require("./dbConnection");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/memories", memoryRouter);

app.listen(3000, async function() {
    console.log("Backend online");
});