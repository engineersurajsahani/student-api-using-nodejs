const express = require('express');
const studentRouter = require('./studentRouter');
const branchRouter = require('./branchRouter');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/student', studentRouter);
app.use('/branch', branchRouter);

app.listen(4000, function () {
    console.log('Server started...');
})