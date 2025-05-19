'use strict';

import 'dotenv/config';
import express from 'express';
import { authRouter } from './route/auth.route.js';

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());
app.use(authRouter);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('noexali');
});
