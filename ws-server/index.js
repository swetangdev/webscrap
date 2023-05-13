const express = require('express');
const app = express();
const errorHandler = require('./helper/error-handler');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/scraper', require('./site/site.controller'));

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
