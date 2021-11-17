const expresss = require('express');
const helmet = require('helmet');
const config = require('./config');
const loader = require('./loaders');
const cors = require('cors');
const { FileRoutes } = require('./routes');
const app = expresss();

config();
loader();

app.use(expresss.json());
app.use(cors());
app.use(helmet());
app.use('/uploads', expresss.static(__dirname + '/uploads'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}...`);

    app.use('/api/files', FileRoutes);
});