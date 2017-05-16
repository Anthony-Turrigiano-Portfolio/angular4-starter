const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static(path.join(__dirname, "dist")));

router.route("/").get((req, res)=>{
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use("/", router);

app.listen(process.env.PORT, process.env.IP, ()=>{
    console.log("Server Listening on " + process.env.C9_HOSTNAME);
});

