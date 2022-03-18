const express = require ('express')
const exphbs = require ('express-handlebars')
const path = require ('path')

//Initialitation

const app = express()

//Settings
app.set('port', process.env.PORT || 5000)
app.set('views', path.join (__dirname + 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),   // Info Dir LAYOUTS + PARTIALS
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs') 


//Middlewares

app.use(express.urlencoded({extended: false}))

// Global Variables

// Routes
app.get('/', (req, res) =>{
    res.send('Bem vindos')
})

//Static Files

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app