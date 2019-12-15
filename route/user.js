const express = require('express');
const router = express.Router();
const user = require('../controller/user');


// routes
router.post('/register', user.register);
router.get('/', user.getAll);
router.get('/current', user.getCurrent);
router.get('/:id', user.getById);
router.put('/:id', user.update);
router.delete('/:id', user._delete);

module.exports = router;

