const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
