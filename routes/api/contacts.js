const express = require('express');

const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');
const {
  getAll,
  getById,
  add,
  updateById,
  updateFavorite,
  deleteById,
} = require('../../controllers/contacts');

const router = express.Router();

router.get('/', authenticate, getAll);

router.get('/:contactId', authenticate, isValidId, getById);

router.post('/', authenticate, validateBody(schemas.addSchema), add);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateBody(schemas.favoriteSchema),
  updateFavorite
);

router.delete('/:contactId', authenticate, isValidId, deleteById);

module.exports = router;
