const express = require('express');

const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

const { usersRoute } = require('./routes/app-routes');
const { appRoutes } = require('./routes/app-routes');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
// app.use('./users', usersRoute);
// app.use('./app', appRoutes);


app.get('/', (req, res) => res.json(
  'ping',
));


// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`SAT is listening to port: ${PORT}`));