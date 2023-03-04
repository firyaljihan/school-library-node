const express = require(`express`)
const app = express()
app.use(express.json())
const borrowController =
require(`../controllers/borrow.controller`)

app.post("/addBorrow", borrowController.addBorrowing)
app.put("/updateBorrow/:id", borrowController.updateBorrowing)
app.delete("/deleteBorrow/:id", borrowController.deleteBorrowing)
app.get("/returnBorrow/:id", borrowController.returnBook)
app.get("/getBorrow", borrowController.getBorrow)

module.exports = app