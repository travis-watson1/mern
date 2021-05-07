const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route GET api/auth
router.get('/', async (req, res) => {
    try {
        const user = await (await User.findById(req.user.id)).isSelected('-password');
        res.json(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;