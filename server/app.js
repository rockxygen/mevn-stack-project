const expresss = require('express');
const helmet = require('helmet');
const config = require('./config');
const app = expresss();

config();

app.use(expresss.json());
app.use(helmet());

app.listen(1717, () => {
    console.log('Server is running on 1717...');
});