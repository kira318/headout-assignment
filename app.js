const express = require("express")
const fs = require("fs")

const app = express();
const port = 8080;

app.get('/data', (req, res) => {
    const n = req.query.n;
    const m = req.query.m;
    const filePath = `tmp/data/${n}.txt`;
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split('\n');
        if (m) {
            if(m <= 0){
                res.send("m should be greater than 0!");
            }
            if(m > lines.length){
                res.send("Oops file dont have this number of lines! m is larger!");
            }
            res.send(lines[m - 1].trim());
        } else {
            res.send(fileContent);
        }
    } else {
        res.status(404).json({ error: 'File not found' });
    }
});

app.listen(port, () => {
    console.log("Server running at port 8080");
})