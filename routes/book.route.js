const express = require(`express`)
const app = express()
app.use(express.json())
const bookController = require(`../controller/book.controller`)
const upload = require(`../controller/upload-cover`)

app.get("/getAllBook", bookController.getAllBooks)
app.post("/findBook", bookController.findBook)
app.post("/addBook", bookController.addBook)
app.put("/updateBook/:id", bookController.updateBook)
app.delete("/deleteBook/:id", bookController.deleteBook)

module.exports = app