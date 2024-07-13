const express = require('express');
const studentRouter = require('./studentRouter');
const branchRouter = require('./branchRouter');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const PORT=process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));
app.use('/student', studentRouter);
app.use('/branch', branchRouter);

app.listen(PORT, function () {
    console.log('Server started...');
})