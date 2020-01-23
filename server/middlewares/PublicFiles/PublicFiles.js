import express from 'express';
import { resolve } from 'path';

export default app => {
  /**
   * @swagger
   *
   * /public/{file}:
   *   get:
   *     description: Returns public files.
   *     tags:
   *       - Static
   *     responses:
   *       200:
   *         description: OK
   */
  app.use('/public', express.static(resolve(__dirname, 'public')));
};
