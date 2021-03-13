const express = require('express');
const bodyParser = require('body-parser');
const htmlpdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');
const path = require('path');
const app = express();
var nodemailer=require('nodemailer');




app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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


app.post('/email',function(req,res){
    email2=req.body.email;
})

//GET route is going to send the generated PDF to the client.
app.get('/fetch-pdf', (req,res) => {
    var transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'naivecreators1303@gmail.com',
            pass:'SHEHACKS'
        }
    });
    
    var mailOptions={
        from:'naivecreators1303@gmail.com',
       to: email2.toString(), //email2.toString(),
       subject:'Here is your CV',
        attachments: [{
            filename: 'cv.pdf',
            path: `${__dirname}/cv.pdf`,
            contentType: 'application/pdf'
          }],
    };
    
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        console.log(error);
        else
        console.log('Email sent:'+ info.response);
    });
    
    
    res.sendFile(`${__dirname}/cv.pdf`);
});

//For testing the production server
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));