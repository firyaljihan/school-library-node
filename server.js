const express = require("express")
const app = express()
const PORT = 8000
const cors = require(`cors`)
const bodyParser = require('body-parser')
const md5 = require(`md5`)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname))

const memberRoute = require("./routes/member.route")
const adminRoute = require("./routes/admin.route")
const bookRoute = require("./routes/book.route")
const borrowRoute = require(`./routes/borrow.route`)

app.use("/member", memberRoute)
app.use("/admin", adminRoute)
app.use("/book", bookRoute)
app.use(`/borrow`, borrowRoute)

app.listen(PORT, () => {
    console.log(`Server of School's Library runs on port ${PORT}`)
    })
    