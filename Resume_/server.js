const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const app = express();




app.use(cors());


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));