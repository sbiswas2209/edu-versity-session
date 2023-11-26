const { Router } = require("express");
const { createUser, getUserById, updateUser, deleteUser } = require("./service");

const userRoutes = Router();

userRoutes.post('/', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        await createUser({ username, password, email });
        res.status(201).json({ message: "User created" });
    } catch(e) {
        res.status(500).json({ message: e.message });
    }
})

userRoutes.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);
        res.status(200).json(user);
    } catch(e) {
        res.status(500).json({ message: e.message });
    }
});

userRoutes.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password, email } = req.body;
        await updateUser(id, { username, password, email });
        res.status(200).json({ message: "User updated" });
    } catch(e) {
        res.status(500).json({ message: e.message });
    }
});

userRoutes.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await deleteUser(id);
        res.status(200).json({ message: "User deleted" });
    } catch(e) {
        res.status(500).json({ message: e.message });
    }
});

module.exports = userRoutes;