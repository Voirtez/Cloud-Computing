const db = require('../persistence');

module.exports = async (req, res) => {
    await db.updateItem(req.params.id, {
        name: req.body.name,
        priority: req.body.priority
        completed: req.body.completed,
    });
    const item = await db.getItem(req.params.id);
    res.send(item);
};
