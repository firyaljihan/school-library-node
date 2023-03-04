const express = require('express')
const app = express()

app.use(express.json()) //convert json

const adminController= require("../controller/admin_controller")

app.get("/getAllAdmin", adminController.getAllAdmin)
app.post("/addAdmin", adminController.addAdmin)
app.post("/findAdmin", adminController.findAdmin)
app.put("/updateAdmin/:id", adminController.updateAdmin)
app.delete("/deleteAdmin/:id", adminController.deleteAdmin)
module.exports = app
