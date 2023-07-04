const express = require('express');

const { validateBody, isValidId } = require('../../middlewares');
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

router.get('/', getAll);

router.get('/:contactId', isValidId, getById);

router.post('/', validateBody(schemas.addSchema), add);

router.put(
  '/:contactId',
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateBody(schemas.favoriteSchema),
  updateFavorite
);

router.delete('/:contactId', isValidId, deleteById);

module.exports = router;
