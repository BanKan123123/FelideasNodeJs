const express = require('express');
const app = express();
const path = require('path');
const { engine } = require('express-handlebars');
const route = require('./routes/index');
const methodOverride = require('method-override');
const db = require('./config/db/config-connectDB-felidae')
db.connect();

const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.urlencoded({
    extended: true,
}));

app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () => console.log('App listening on port 3000'));