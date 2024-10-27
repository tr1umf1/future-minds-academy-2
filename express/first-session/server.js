const express = require('express');
const users = require('./users').users;

const app = express();

app.use('/public', express.static('public'));
app.use(express.json());

// REST Service for users

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get user by id
app.get('/users/:id', (req, res) => {
    const id = req.params['id'];
    const user = users.find((u) => u.id == id);

    if (!user) {
        res.status(404).end();
        return;
    }

    res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
    const newUser = req.body;

    // Validation
    if (!newUser.firstname || !newUser.lastname || newUser.isActive === undefined) {
        res.status(400).send("Please provide a valid user");
        return;
    }

    newUser.id = users.length + 1;
    users.push(newUser);

    res.status(201).json(newUser);
});

// Update an existing user
app.put('/users/:id', (req, res) => {
    const id = req.params['id'];
    const newUser = req.body;
    const user = users.find((u) => u.id == id);

    if (!user) {
        res.status(400).send("The user doesn't exist");
        return;
    }

    // Validation
    if (newUser.firstname === undefined || newUser.lastname === undefined || newUser.isActive === undefined) {
        res.status(400).send("Please provide a valid user");
        return;
    }

    user.firstname = newUser.firstname;
    user.lastname = newUser.lastname;
    user.isActive = newUser.isActive;

    res.json(user);
});

app.listen(8585, () => {
    console.log('Server is running on port 8585');
});
