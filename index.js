const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Courses server api site -by Nazmul Rony');
})

app.listen(port, () => {
    console.log('Courses API running on port: ', port);
})
