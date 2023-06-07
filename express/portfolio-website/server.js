const express = require('express');
const app = express();
const port = 3000


//engine is ejs
app.set('view engine', 'ejs');

//routes
app.get('/', (req, res) => {
res.render('index');

});

app.listen(port,() => {
    console.log('Server running at http://localhost:3000/');

});