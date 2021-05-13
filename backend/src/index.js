const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
//converter json em objeto
app.use(express.json());
app.use(routes);

app.listen(3333);
