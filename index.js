const express = require("express")

const{PORT} = require("./config")

const app = express()

//routes
app.get("/", (req, res) => {
    res.send("hello there")
})

app.get("/users", (req, res) => {
    res.send("hello users")
})

// example endpoint: http://localhost:5000/users/naut1234
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    res.send(`hello user: ${id}`)
})

// example endpoint: http://localhost:5000/users/naut1234/add
app.get("/users/:id/:action", (req, res) => {
    const {action, id} = req.params;
    res.send(`${action} user: ${id}`)
})






app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})