import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// routes

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// app.use('/', home) set routes

const CONNECTION_URL = 'mongodb://localhost/westudyall';
const PORT = process.env.PORT || 7000;

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
