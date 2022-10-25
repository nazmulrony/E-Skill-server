const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Courses server api site -by Nazmul Rony');
})

app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '06') {
        res.send(courses);
    } else {
        const selectedCategory = courses.filter(c => c.category_id === id);
        res.send(selectedCategory);
    }

})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    selectedCourse = courses.find(c => c.id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('Courses API running on port: ', port);
})
