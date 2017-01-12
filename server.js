const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

hbs.registerHelper('getDate', () => {
    return new Date().getFullYear()
});


app.use((req, res, next) => {
    var now = new Date().toString();
    console.log(now);
    next();
})


app.use((req, res, next) => {
    res.render('maintanance.hbs', {
        headerTitle: 'headerTitle inj!',
        year: new Date().getFullYear()
    });
})

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('<h1>hello Express!</h1>');
    res.render('home.hbs', {
        headerTitle: 'headerTitle inj!',
        year: new Date().getFullYear()


    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        headerTitle: 'headerTitle inj!',
        year: new Date().getFullYear()
    });
});

app.listen(3000);
