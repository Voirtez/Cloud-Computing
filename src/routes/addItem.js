const db = require('../persistence');
const {v4 : uuid} = require('uuid');

module.exports = async (req, res) => {
    const item = {
        id: uuid(),
        name: req.body.name,
        priority: req.body.priority, // Change here
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
