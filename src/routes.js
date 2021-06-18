import { Router } from 'express';


import userRoutes from './routes/userRoutes';

const jwt = require('jsonwebtoken')
/**
 * Contains all API routes for the application.
 */

const router = Router();

/**
 * GET /api
 */
router.get('/api', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.get('/token', (req, res) => { res.json(jwt.sign({ name: "user" }, 'secret')) })
router.use('/', userRoutes);

export default router;
