const express = require('express')
const app = express()

app.use(express.json()) //convert json

const memberController= require("../controller/member_controller")

app.get("/getAllMember", memberController.getAllMember)
app.post("/addMember", memberController.addMember)
app.post("/findMember", memberController.findMember)
app.put("/updateMember/:id", memberController.updateMember)
app.delete("/deleteMember/:id", memberController.deleteMember)
module.exports = app
