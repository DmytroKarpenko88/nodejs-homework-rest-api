const express = require('express');
const { authenticate, validateBody } = require('../../middlewares');

const ctrl = require('../../controllers/users');
const { schemas } = require('../../models/user');

const router = express.Router();

router.get('/current', authenticate, ctrl.getCurrent);

router.patch(
  '/subscription',
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);

module.exports = router;
