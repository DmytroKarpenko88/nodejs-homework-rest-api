const express = require('express');
const { validateBody, authenticate, upload } = require('../../middlewares');
const { schemas } = require('../../models/user');
const ctrl = require('../../controllers/auth');

const router = express.Router();

// signup
router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

// signin
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  ctrl.updateAvatar
);

router.patch('/subs');

module.exports = router;
