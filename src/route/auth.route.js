// const Router = require('express');
import { Router } from 'express';
// const express = require('express');

export const authRouter = Router();
// export const authRouter = new express.Router();

authRouter.post('/registration', (req, res) => {
  res.send('Hello2');
});
