'use strict';

// require('dotenv/config');
import 'dotenv/config';

// const express = require('express');
import express from 'express';
// const { authRouter } = require('./route/auth.route.js');
import { authRouter } from './route/auth.route.js';

const PORT = process.env.PORT || 3005;

const app = express();

app.use(authRouter);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT);
