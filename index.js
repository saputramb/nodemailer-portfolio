const express = require('express');
const app = express();
const route = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const volleyball = require("volleyball");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(volleyball);
app.use(express.json());
app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'http://localhost:5000'] }));
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api', route);

require('dotenv').config();

const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log('Listening to port ' + port)
);