const express = require ('express')
const path = require ('path')

//Initialitation

const app = express()

//Settings
app.set('port', process.env.PORT || 5000)

app.set('views', path.join (__dirname + 'views'))


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