const expresss = require('express');
const helmet = require('helmet');
const config = require('./config');
const loader = require('./loaders');
const app = expresss();

config();
loader();

app.use(expresss.json());
app.use(helmet());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}...`);
});