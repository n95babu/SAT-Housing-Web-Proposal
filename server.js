const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.json(
  'ping',
));


// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`SAT is listening to port: ${PORT}`));