const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const htmlpdf = require('html-pdf');
const path = require('path');
const app = express();
const pdfTemplate = require('./documents');




app.use(cors());

//POST route is going to fetch the data and generate a PDF.

app.post('/create-pdf', (req, res) => {
    htmlpdf.create(pdfTemplate(req.body), {}).toFile('cv.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
            console.log("MY bad");
        }

        res.send(Promise.resolve());
        console.log('Success');
    });
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));