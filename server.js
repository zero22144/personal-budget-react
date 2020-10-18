// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4200;

app.use(cors());

const budget = {
    myBudget: [
        {
            title: 'Food',
            budget: 50
        },
        {
            title: 'Rent',
            budget: 950
        },
        {
            title: 'Groceries',
            budget: 110
        },
        {
            title: 'Car Payment',
            budget: 400
        },
        {
            title: 'Online Subscriptions',
            budget: 50
        },
        {
            title: 'Utilities',
            budget: 180
        },
        {
            title: 'Gas',
            budget: 80
        },
    ]
};


app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});