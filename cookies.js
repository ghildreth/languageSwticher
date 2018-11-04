const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// USE COOKIES!
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// const val = cookieParser();
// console.log(val.toString());
// console.log(cookieParser);

// need this to grab css files
app.use(express.static(__dirname + '/public'));


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // this log allows us to views the headers
    // console.log(req.headers);
    // console.log(req.headers.cookie);
    var lang = req.cookies['lang'];
    console.log(req.cookies['lang']);
    if (lang === 'EN') {
        res.render('english');
    } else if (lang === 'FR') {
        res.render('french')
    } else {
        res.render('welcome');
    }
});

app.get('/lang/:lang', (req, res) => {
    res.cookie('lang', req.params.lang);
    // res.cookie('lang', 'EN');
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);   
})