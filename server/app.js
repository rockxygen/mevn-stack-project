const expresss = require('express');
const helmet = require('helmet');
const config = require('./config');
const app = expresss();

config();

app.use(expresss.json());
app.use(helmet());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}...`);
});