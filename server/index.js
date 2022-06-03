import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from 'config';

// routes
import router from './routes/index.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(express());

// setting up routes
app.use('/', router);

const CONNECTION_URL = config.get('db');
const PORT = process.env.PORT || config.get('port');

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is listening at port ${PORT} ...`)
    );
  })
  .catch((err) =>
    console.log(
      `Server couldn't connect to the database. ERROR_OBJECT = ${err}`
    )
  );
