const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogPostRoutes = require('./blogpost-routes');

router.use('/users', userRoutes);
router.use('/blog',blogPostRoutes);

module.exports = router;
