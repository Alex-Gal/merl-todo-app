const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.route'))

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Alex-Gal:Lexa2084163@cluster0.ocia8.mongodb.net/merl-todo-app?retryWrites=true&w=majority')

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (err) {
        console.error(err)
    }
}

start()